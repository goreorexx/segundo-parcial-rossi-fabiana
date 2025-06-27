import { Router } from "express";
import { 
    getAllMovies,
    createMovie,
    getMovieById,
    updateMovie,
    deleteMovie } from "../controllers/movie.controllers";

const routes = Router();

Router.get('/api/movies', getAllMovies);
Router.get('/api/movies/:id', getMovieById);
Router.post('/api/movies', createMovie);
Router.put('/api/movies/:id', updateMovie);
Router.delete('/api/movies/:id', deleteMovie);

export default routes;