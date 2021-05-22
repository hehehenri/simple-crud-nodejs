const express = require('express')
const routes = require('./src/routes')
const mongoose = require('mongoose')

mongoose.connect("place your mongoose connection link!", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log("Successfully connected!"))
.catch((error) => console.log("Mongoose connection error: "+error))

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log("Server running on port 3333!"))
