const express = require('express')
const config = require('config')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const app = express()

app.use(cors())

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require('dotenv').config();

app.use('/api/news', require('./routes/news.routes'))

const PORT = config.get('port') || 8080

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
