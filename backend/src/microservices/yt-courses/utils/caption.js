import { YoutubeTranscript } from 'youtube-transcript';
import processChunks from '../../genAI-langchain/controller/summariser.js';
const CHUNK_SIZE = 5000;
const OVERLAP = 200;

function splitIntoChunks(text, chunkSize, overlap) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize - overlap) {
      chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
  }

const getCaption = async (videoID) => {
    try{
        const transcript = await YoutubeTranscript.fetchTranscript(videoID);
        const captions = transcript.map((item) => {
            return item.text;
        });
        return captions;
    }
    catch(err){
        console.log(err);
        return "Failed to fetch captions";
    }
}

const getSummarisedCaption = async (videoID) => {
    const captions = await getCaption(videoID);
    const chunks = splitIntoChunks(captions, CHUNK_SIZE, OVERLAP);
    // const summarisedCaptions = await processChunks(chunks[0].slice(0, 10));
    return chunks[0].slice(0, 10);
    // return summarisedCaptions;
}

export {getSummarisedCaption};