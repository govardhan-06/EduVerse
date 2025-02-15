import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import { z } from "zod";
import { RunnableSequence } from "@langchain/core/runnables";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

dotenv.config();

// Define Zod Schema for Quiz Questions
const questionSchema = z.object({
    question: z.string().describe("The quiz question text"),
    optionA: z.string().describe("Option A for the question").refine(val => val !== '', { message: "Option A cannot be empty" }),
    optionB: z.string().describe("Option B for the question").refine(val => val !== '', { message: "Option B cannot be empty" }),
    optionC: z.string().describe("Option C for the question").refine(val => val !== '', { message: "Option C cannot be empty" }),
    optionD: z.string().describe("Option D for the question").refine(val => val !== '', { message: "Option D cannot be empty" }),
    answer: z.enum(["A", "B", "C", "D"]).describe("The correct answer (A, B, C, or D)"),
});

const zodSchema = z
  .array(questionSchema)
  .length(10)
  .describe("List of 10 quiz questions based on the provided context");

const parser = StructuredOutputParser.fromZodSchema(zodSchema);

export const model = new ChatGroq({
    model: "deepseek-r1-distill-llama-70b",
    apiKey: process.env.GROQ_API_KEY
});

// Enhanced Prompt to Ensure Unique Keys and Structure
const chain = RunnableSequence.from([
    ChatPromptTemplate.fromTemplate(
      `Generate exactly 10 quiz questions in the following format without any duplicate keys:
      {format_instructions}
      {question}
      Each question must have unique keys: question, optionA, optionB, optionC, optionD, and answer.`
    ),
    model,
    parser,
]);

// Clean JSON Function to Remove Duplicate Keys
const cleanJSON = (jsonArray) => {
  return jsonArray.map(item => {
    const uniqueItem = {};
    for (const key in item) {
      if (!uniqueItem.hasOwnProperty(key)) {
        uniqueItem[key] = item[key];
      }
    }
    return uniqueItem;
  });
}

// Main Function to Get Model Response
const getModelResponse = async (context) => {
    try {
        const response = await chain.invoke({
            question: context,
            format_instructions: parser.getFormatInstructions(),
        });
        const cleanedResponse = cleanJSON(response);  // Clean the output
        return cleanedResponse;
    } catch (error) {
        console.log(error);
    }
}

export default getModelResponse;
