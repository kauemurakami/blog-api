const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')

//aceitar dados de formulários e json
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

//static
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send({"title":"welcome"})
})

// Database
connection
  .authenticate()
  .then(() => {
  console.log('conexão com banco feita com sucesso')
}).catch((e) => {
  console.log(e)
})

app.listen(8000, () => {
  console.log('server started')
})