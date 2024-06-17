import pool from "../../database/config.js"


// Get all posts
export const getAllPosts_model = async () => {
    const sqlQuery = {text:'SELECT * FROM posts'}
    try {
        const result = await pool.query(sqlQuery)
        console.log(result.rows)
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

// Creating a posts
export const createPost_model = async ({ titulo, img, descripcion, likes = 0 }) => {
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [titulo, img, descripcion, likes] 
    }
    try {
        const result = await pool.query(sqlQuery)
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}