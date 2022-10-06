/**
 * JWT API
 */
import express from "express";
const app = express()

app.get('/', (req, res) => {
    res.send('Hi wokers!')
})

app.listen(3000)

