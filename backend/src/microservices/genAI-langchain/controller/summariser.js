import { ChatPromptTemplate, HumanMessagePromptTemplate } from "@langchain/core/prompts";
import { model } from "./model.js";

const processChunks = async (chunks) => {
  const combinedOutput = [];
  for (const chunk of chunks) {
    const prompt = ChatPromptTemplate.fromMessages([
      HumanMessagePromptTemplate.fromTemplate('Summarize: "{text}"')
    ]);

    console.log("Processing chunk: "+chunk.length);
    const promptValue = await prompt.formatPromptValue({ text: chunk });
    var output = await model.invoke(promptValue);
    output=JSON.stringify(output, null, 2);
    output=JSON.parse(output);
    combinedOutput.push(output.kwargs.content);
  }
  console.log("Summarised");
  return combinedOutput.join(" ");
};

export default processChunks;
