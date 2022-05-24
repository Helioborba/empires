import { Router } from 'express';
import { postTest, getTest, getGres, postGres } from '../controllers/api-cons.js';


const router = Router();

// Rotas de teste
// router.post("/post_test", postTest);
// router.get("/get_test", getTest);

// Todos os valores guardados
router.get("/list_posts", getGres); // GET
// router.post('/inserir', postGres); // POST

export default router;