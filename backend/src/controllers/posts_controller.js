import { createPost_model, getAllPosts_model } from "../models/posts_models.js"

//Ruta de prueba
export const saludo = (req, res) => {
    res.send('ruta «/» habilitada')
}

//GET
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPosts_model()
        res.status(200).json({posts: posts})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//POST
export const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body
        const newPost = await createPost_model({ titulo, img, descripcion, likes })
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

