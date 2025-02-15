import { getSummarisedCaption } from "../utils/caption.js";
import getModelResponse from "../../genAI-langchain/controller/model.js";

const generateQuiz = async (req,res) => {
    try
    {
        const {videoId} = req.body;
        const summarisedCaptionsaption = await getSummarisedCaption(videoId);
        const response = await getModelResponse(summarisedCaptionsaption);
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
}

export {generateQuiz};