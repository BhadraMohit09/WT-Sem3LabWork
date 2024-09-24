const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
	res.send('Hello, World!\n');
});

server.listen(port, () => {
	console.log(`Server running at port - ${port}`);
});
