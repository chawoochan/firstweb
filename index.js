const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chawoochan:ss020603@firstcluster.0mqww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
