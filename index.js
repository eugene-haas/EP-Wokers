/**
 * JWT API
 */
import express from "express";
//const express = require('express')
const router = express.Router()
// const app = express()
// const router = express.Router()

router.get('/ui', (req, res) => {
    res.send('Hi wokers! use app')
})

// //app.listen(3000)
addEventListener('fetch', (e) => {
    e.respondWith(router.handle(e.request))
})
/**
export default {
    async fetch(request, environment, context) {
        return new Response("I’m a module!");
    },
    async scheduled(controller, environment, context) {
    // await doATask();
    }
}
**/