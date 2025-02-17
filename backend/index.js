import express from 'express'
import cors from 'cors'
import postsRouter from './src/routes/posts_routes.js'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.json())
app.use(cors())
app.use('/', postsRouter)

//Ruta de prueba
app.get('/test', (req, res) => {
    res.json({message: 'Cors habilitado 💪'})
})

//Puerto de escucha
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`)
})

