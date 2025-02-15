import google from '@googleapis/youtube';
import dotenv from 'dotenv';
dotenv.config();

const ytAuth = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
});

const filterResponse = (response) => {
    const filteredResponse = response.map((item) => {
        return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            channel: item.snippet.channelTitle
        };
    });
    return filteredResponse;
}

const getytVideo = async (req, res) => {
    const {query,maxResults}=req.body;
    try{
        const response = await ytAuth.search.list({
            "part": ['snippet'],
            "q": query,
            "maxResults": maxResults,
            "order": "viewCount",
            "safeSearch": "strict",
            "type": [
                "video"
            ]
        });
        const filtered=filterResponse(response.data.items);
        res.status(200).json(filtered);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
};

export {getytVideo};