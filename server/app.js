const express = require('express')
const path = require('path')
const app = express()

const port = 3000

const clientPath = path.join(__dirname,'../client')


app.use(express.static(clientPath))
app.get('/', (req,res)=>{
    console.log('someone invite /')
})



app.listen(port,()=>{
    console.log(clientPath)
    console.log("hello world app server at ",port)
})