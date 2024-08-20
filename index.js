const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const faculty = require('./Model/Faculty');


//Input your connection string
const connectionString = '';

mongoose.connect(connectionString).then(()=>{

    const app = express();

    app.use(bodyParser.urlencoded({extended: false}));

    // app.use(express.json());

    console.log("Connection Established");

    //GET ALL
    app.get('/home', async(req, res)=>{
        const result = await student.find();
        res.json(result);
    });

    //GET BY ID
    app.get('/home/:id', async(req, res)=>{
        const result = await faculty.findOne({id: req.params.id});
        res.json(result);
    });

    //INSERT
    app.post('/add', async(req, res)=>{
        const data = new faculty(req.body);
        const result = await data.save();
        res.json(result);
    });

    //UPDATE
    app.patch('/update/:id', async(req, res)=>{
        const result = await faculty.findOneAndUpdate({id: req.params.id}, req.body);
        res.json(result); 
    });

    //DELETE
    app.delete('/home/delete/:id', (req, res)=>{
        const result = await faculty.deleteOne({id: req.params.id});
        res.json(result);
    }
               
    app.listen(7000, ()=>{
        console.log("Server initialised...");
    });

});
