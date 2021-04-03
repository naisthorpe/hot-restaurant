const http = require('http');

const PORT = 3000;

const handleRequest = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`Hot Restaurant: ${request.url}`);
  };

const server = http.createServer(handleRequest);

  server.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
  