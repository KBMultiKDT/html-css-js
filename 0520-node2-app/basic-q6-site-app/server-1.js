const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.method);
    res.setHeader("Content-Type", "text/html");
    const {method, url} = req;
    if (method === "GET" && url === "/") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/home.html", "utf-8");
        readStream.pipe(res);
    }else if (method === "GET" && url === "/login") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/login.html", "utf-8");
        readStream.pipe(res);
    }else if (method === "GET" && url === "/info") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/info.html", "utf-8");
        readStream.pipe(res);
    }else if (method === "GET" && url === "/location") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/location.html", "utf-8");
        readStream.pipe(res);
    }else {
        res.statusCode = 404;
        res.end("Not Found");
    }

   // console.log(req);
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});
