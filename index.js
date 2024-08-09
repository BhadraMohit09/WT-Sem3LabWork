// const express = require('express');

// const path = require('path');

// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

// const array = [
//     {
//       "id": "1",
//       "name": "Justine_Funk",
//       "cost": "687.00"
//     },
//     {
//       "id": "2",
//       "name": "Charlotte_Leffler97",
//       "cost": "386.00"
//     },
//     {
//       "id": "3",
//       "name": "Rosemary_Ullrich",
//       "cost": "584.00"
//     },
//     {
//       "id": "4",
//       "name": "Alana_Schulist",
//       "cost": "139.00"
//     },
//     {
//       "id": "5",
//       "name": "Rickie_Kihn75",
//       "cost": "582.00"
//     },
//     {
//       "id": "6",
//       "name": "Raoul_Johns45",
//       "cost": "888.00"
//     },
//     {
//       "id": "7",
//       "name": "Eulalia.Franecki0",
//       "cost": "388.00"
//     },
//     {
//       "id": "8",
//       "name": "Amber77",
//       "cost": "144.00"
//     },
//     {
//       "id": "9",
//       "name": "Mario97",
//       "cost": "910.00"
//     },
//     {
//       "id": "10",
//       "name": "Horace52",
//       "cost": "65.00"
//     },
//   ];


//   app.get('/home/:id', (req, res)=>{
//     res.send(array.find((e)=>{
//         if(e.id == req.params.id){
//             return e;
//         }
//     }));
// });

// app.post('/add', (req, res)=>{
//   const { id, name, cost } = req.body;

//   const result = {
//     "id": id,
//     "name": name,
//     "cost": cost
//   }

//   array.push(result);

//   res.json(array);
// });

// app.delete('/home/:id' ,(req, res)=>{
//   const ID = req.params.id;
//   const result = array.find(result => result.id = ID);
//   if(result){
//     newArray = array.filter(result => result.id != ID);
//     res.json(newArray);
//   }
// });

// app.put('/home/:id', (req, res)=>{
//   const { id }= req.params;
//   const { name, cost } = req.body;

//   const result = array.find(e => e.id = id);

//   if(result){
//     result.name = name;
//     result.cost = cost;
//     res.json(array);
//   }else{
//     res.send("Unable to update");
//   }
// });
// app.get('/home', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'Home.txt'));
// });

// app.get('/username/:name', (req, res)=>{
//   const name = req.params.name;
//   res.send(name);
// });

// app.get('/home', (req, res, next)=>{

//   let numA = 10;

//   if(numA == 10){
//     next();
//   }
//   console.log("Inside function A");
// });

// app.get('/home', (req, res)=>{
//   console.log("Inside function B");
// });

// app.listen(7000, ()=>{
//     console.log("Server started");
// });