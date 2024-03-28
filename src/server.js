// TASK #2: Import the required modules
import http from 'http';
import url from 'url';

let count = 0;

// TASK #3: Write a request handler
function requestHandler(req, res) {
    const pathname = url.parse(req.url, true).pathname;
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (pathname === '/inc') {
        count += 1;
        res.end(`<b>Count: ${count}</b>`);
    } else {
        res.end("Server is running");
    }
}
// TASK #4: Create the web server
// Add your implementation below.

const server = http.createServer(requestHandler);
server.listen(3000, () => {
    console.log(`Server started on port 3000`);
  });
