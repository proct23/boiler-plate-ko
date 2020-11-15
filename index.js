const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://proct23:simzals123@boilerplate.9u8mf.mongodb.net/boilerplate?retryWrites=true&w=majority',{
  useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() => console.log('MonggoDB Connect'))
  .catch(err => console.log(err))



//mongodb+srv://proct23:<password>@boilerplate.9u8mf.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})