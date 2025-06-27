import { Sequelize } from "sequelize";

export const createMovie = async (req, res) => {
    try {
        const { title, director, duration, genre, description } = req.body;
        if (!(await isNameUnique(name))) {
            return res.status(400).json({ error: "El nombre del libro ya existe en la base de datos."});
        }
        if (!title || !director || !duration || !genre) {
            return res.status(400).json({ error: "Parece que faltan campos obligatorios." });
        }
        const movies = await movies.create({ title, director, duration, genre, description })
        res.send(201).json(movies);
    } catch (error) {
        return res.status(500).json({ error: "Ha habido un error en la base de datos." });
    }
};

export const getMovieById = async (req, res) => {
    try {
        const movies = await movies.findByPk(req.params.id)
        res.send(200).json(movies);
    } catch (error) {
        return res.status(500).json({ error: "Ha habido un error en la base de datos." })
    }
};

export const getAllMovies = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ error: "Ha habido un error en la base de datos." });
    }
};

export const updateMovie = async (req, res) => {
    try {
        if (!(await isNameUnique(name))) {
            return res.status(400).json({ error: "El nombre del libro ya existe en la base de datos."});
        }
        
    } catch (error) {
        return res.status(500).json({ error: "Ha habido un error en la base de datos." });
    }
};

export const deleteMovie = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ error: "Ha habido un error en la base de datos." });
    }
};