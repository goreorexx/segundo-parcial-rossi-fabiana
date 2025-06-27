import { Sequelize } from "sequelize";

const createMovie = async (req, res) => {
    try {
        const { title, director, duration, genre, description } = req.body;
        if (!(async isNameUnique(name))) {
            return res.status(400).json({ error: "El nombre del libro ya existe en la base de datos."});
        }
    } catch (err) {
        
    }
}