require("dotenv").config()
const express = require("express")

const connetToDb = require ("./database/db")



const app= express()
const port= process.env.PORT || 3000

app.get("/helo", (req, res) => {
    res.send("hello world")
})

connetToDb()

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))