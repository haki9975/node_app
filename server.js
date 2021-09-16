const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('');
});

const PORT = 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
