// TASK #2: Import the required modules
import http from 'http';
import url from 'url';

let counter = 0;

// TASK #3: Write a request handler
function requestHandler(req, res) {
    const pathname = url.parse(req.url, true).pathname;

    if (pathname === '/inc') {
        counter += 1;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<b>Count: ${counter}</b>`)
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("Server is running");
    }
}
// TASK #4: Create the web server
// Add your implementation below.

const server = http.createServer(requestHandler);
server.listen(3000, () => {
    console.log(`Server started on port 3000`);
  });
