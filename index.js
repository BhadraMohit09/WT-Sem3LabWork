const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const faculty = require('./Model/Faculty');

const connectionString = 'mongodb+srv://23010101605:mohit123@cluster0.pbnz1h4.mongodb.net/Faculty?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString).then(()=>{

    const app = express();

    app.use(bodyParser.urlencoded({extended: false}));

    // app.use(express.json());

    console.log("Connection Established");

    app.get('/home', async(req, res)=>{
        const result = await student.find();
        res.json(result);
    });

    app.get('/home/:id', async(req, res)=>{
        const result = await faculty.findOne({id: req.params.id});
        res.json(result);
    });

    app.post('/add', async(req, res)=>{
        const data = new faculty(req.body);
        const result = await data.save();
        res.json(result);
    });

    app.patch('/update/:id', async(req, res)=>{
        const result = await faculty.findOneAndUpdate({id: req.params.id}, req.body);
        res.json(result); 
    });

    app.listen(7000, ()=>{
        console.log("Server initialised...");
    });

});