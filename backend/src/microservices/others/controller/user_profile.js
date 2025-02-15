import { getAvatars } from "../utils/db.js";

const getvirAvatars = async (req, res) => {
    try {
        const avatars = await getAvatars();
        res.status(200).json(avatars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getvirAvatars };