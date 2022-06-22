import {createServer} from "node:http"

const server = createServer((req, res) => {
    console.log("Request accepted");

    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html");

    res.end("<html><body><h1>This page was served with NodeJs!</h1><h2>And I'm just trying to do some exercises!</h2></body></html>")

})


server.listen(3000, () =>{console.log("Server is online")})