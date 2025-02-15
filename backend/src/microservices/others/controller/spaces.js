import { getSpaces } from "../utils/db.js";

const getvirSpaces = async (req, res) => {
    try {
        const spaces = await getSpaces();
        res.status(200).json(spaces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getvirSpaces };