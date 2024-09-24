const http = require('http');

const port = 3000;

const sendResponse = (res, content) => {
	res.send(content);
};

const server = http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			sendResponse(res, '<h1>Home Page</h1><p>Welcome to the Home Page!</p>');
			break;
		case '/about':
			sendResponse(res, '<h1>About Page</h1><p>This is the About Page.</p>');
			break;
		case '/contact':
			sendResponse(res, '<h1>Contact Page</h1><p>This is the Contact Page.</p>');
			break;
		case '/services':
			sendResponse(res, '<h1>Services Page</h1><p>These are our services.</p>');
			break;
		case '/portfolio':
			sendResponse(res, '<h1>Portfolio Page</h1><p>Check out our portfolio.</p>');
			break;
		default:
			sendResponse(res, '<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
			break;
	}
});

server.listen(port, () => {
	console.log(`Server running at port: ${port}`);
});
