//program_no_1  create a hello world webapp using ExpressJS.
const express = require('express')
const app = express();

// Route for the home page
app.get('/',(req,res)=>{
    res.send("Hello World From Home Page")
})

// Route for the about page
app.get('/about',(req,res)=>{
    res.send("Hello World From About Us Page")
})

// Route for the contact page
app.get('/contact',(req,res)=>{
    res.send("Hello World From Contact Page")
})

// Route for the login page
app.get('/login',(req,res)=>{
    res.send("Hello World From Login Page")
})

// Route for the signup page
app.get('/signup',(req,res)=>{
    res.send("Hello World From Signup Page")
})

app.listen(3030, ()=>{
    console.log("Server Started @ 3030")
})






//program_no_2  create a webapp with 5 pages like about, contact etc. using ExpressJS.
// const express = require('express');
// const fs = require('fs');
// const app = express();

// // Function to read file content
// function readFileContent(filePath, res) {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('An error occurred while reading the file.');
//       return;
//     }
//     res.send(data);
//   });
// }

// app.get('/', (req, res) => {
//   readFileContent('home.txt', res);
// });

// app.get('/about', (req, res) => {
//   readFileContent('about.txt', res);
// });

// app.get('/contact', (req, res) => {
//   readFileContent('contact.txt', res);
// });

// app.get('/services', (req, res) => {
//   readFileContent('services.txt', res);
// });

// app.get('/products', (req, res) => {
//   readFileContent('products.txt', res);
// });

// app.listen(3030, ()=>{
//     console.log("Server Started @ 3030")
// })






//program_no_3  create a webapp NodeJS which reads files like about.txt, contact.txt and display it using ExpressJS.
// const express = require('express');
// const fs = require('fs');
// const app = express();

// // Function to read file content
// function readFileContent(filePath, res) {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('An error occurred while reading the file.');
//       return;
//     }
//     res.send(data);
//   });
// }

// app.get('/', (req, res) => {
//   res.send('Welcome to our website!');
// });

// app.get('/about', (req, res) => {
//   readFileContent('about.txt', res);
// });

// app.get('/contact', (req, res) => {
//   readFileContent('contact.txt', res);
// });

// app.listen(3030, ()=>{
//     console.log("Server Started @ 3030")
// })
