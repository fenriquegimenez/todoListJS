const express = require("express")
const cors = require("cors")
require("dotenv").config({ path: ".env" })

const connectDB = require("./config/db")
const {
  createEndpoint,
  getAllEndpoint,
  getByIdEndpoint,
  deleteEndpoint,
  updateEndpoint,
} = require("./middlewares/middlewares")

const port = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post("/create", (req, res) => {
  createEndpoint(req, res)
})

app.get("/getAll", async (req, res) => {
  await getAllEndpoint(req, res)
})

app.get("/getById", async (req, res) => {
  await getByIdEndpoint(req, res)
})
app.delete("/delete", async (req, res) => {
  await deleteEndpoint(req, res)
})
app.put("/update", async (req, res) => {
  await updateEndpoint(req, res)
})

// Server
app.listen(port, () => {
  console.log(`[SERVER] Server ready on http://localhost:${port}`)
})

connectDB()
