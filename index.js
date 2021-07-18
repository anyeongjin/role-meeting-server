let http = require("http");
let hostname = "127.0.0.1";
let port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/matching_info") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const information = JSON.stringify([
        {
          role: "비주얼",
          place: "홍대",
          date: "금요일",
          time: "7시",
        },
      ]);
      res.end(information);
    } else if (method === "POST") {
      res.end("생성되었습니다!");
    }
  }
  res.end("Good Bye");
});

server.listen(port, hostname);

console.log("yj_meeting server on!");
