import { Router } from 'express'
import { createPost, getAllPosts, saludo } from '../controllers/posts_controller.js'

const router = Router()

//Ruta de prueba
router.get('/', saludo)

//Ruta GET
router.get('/posts', getAllPosts)  

//ruta POST
router.post('/posts', createPost)

export default router