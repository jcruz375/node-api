const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//initialiazing app
const app = express();
app.use(express.json());
app.use(cors());

//databae
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models');

//routes
app.use('/api', require('./src/routes'));

//server
app.listen(3001, (error) => {
    if (error){
        console.log('server não iniciado')
    } else {
        console.log('server iniciado com sucesso'); 
    }
});