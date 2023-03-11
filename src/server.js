require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT ?? 4000

const app = express()
app.use(bodyParser.json())

app.use(require("./routes/data"))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
