const express=require('express');
const cors= require('cors');
const app = express();
const port = process.env.PORT||5000;


app.use(cors());

const catagories = require('./data/catagories.json');

app.get('/',(req,res)=>{
    res.send('News api is Running');
});

app.get('/news-catagories',(req,res)=>{
    res.send(catagories);
})

app.listen(port,()=>{
    console.log('dragon news server in running on port',port);
})