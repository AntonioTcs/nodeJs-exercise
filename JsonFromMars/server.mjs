import {createServer} from "node:http"

const server = createServer((req, res) => {
    console.log("Request accepted");

    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");

    const jsonObj = JSON.stringify({location : "Mars"})
    
    res.end(jsonObj)

})


server.listen(3000, () =>{console.log("Server is online")})