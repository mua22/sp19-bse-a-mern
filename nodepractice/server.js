const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello A Section");
    res.end();
  }
  if (req.url == "/help") {
    res.write("Help Page");
    res.end();
  }
});
server.on("connection", (socket) => {
  console.log("Client Connected");
});
server.listen(3400);
console.log("Listening on 3400");
