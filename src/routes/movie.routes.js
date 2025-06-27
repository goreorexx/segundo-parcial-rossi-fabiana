import { Router } from 'express';
import { 
    getAllMovies,
    createMovie,
    getMovieById,
    updateMovie,
    deleteMovie 
} from "../controllers/movie.controllers.js";

const router = Router();

router.get('/api/movies', getAllMovies);
router.get('/api/movies/:id', getMovieById);
router.post('/api/movies', createMovie);
router.put('/api/movies/:id', updateMovie);
router.delete('/api/movies/:id', deleteMovie);

export default router;