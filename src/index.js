const express = require("express")
const cors = require("cors")
require("dotenv").config({ path: ".env" })

const connectDB = require("./config/db")
const { createEndpoint } = require("./middlewares/middlewares")

const port = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post("/create", (req, res) => {
  createEndpoint(req, res)
})

// Server
app.listen(port, () => {
  console.log(`[SERVER] Server ready on http://localhost:${port}`)
})

connectDB()
