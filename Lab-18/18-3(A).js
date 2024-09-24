// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// // Helper function to read a file and send the response
// const serveFile = (filePath, response) => {
// 	fs.readFile(filePath, 'utf8', (err, data) => {
// 		if (err) {
// 			response.writeHead(404, { 'Content-Type': 'text/plain' });
// 			response.end('File not found');
// 			return;
// 		}
// 		response.writeHead(200, { 'Content-Type': 'text/plain' });
// 		response.end(data);
// 	});
// };

// // Create the server
// const server = http.createServer((req, res) => {
// 	if (req.url === '/about') {
// 		serveFile(path.join(__dirname, 'about.txt'), res);
// 	} else if (req.url === '/contact') {
// 		serveFile(path.join(__dirname, 'contact.txt'), res);
// 	} else {
// 		res.end('<h1>This is default text from "/".</h1>')	;
// 	}
// });

// // Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
// 	console.log(`Server running at http://localhost:${PORT}/`);
// });
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
	const URL = req.url;
	if(URL == '/about'){
		const ReadData = fs.readFileSync('about.txt', 'utf-8');
		console.log(ReadData);
		res.write(ReadData);
		res.end();
	}
});

server.listen(7000,()=>{
	console.log("Server Initialised...");
});