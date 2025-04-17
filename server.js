let net = require("net")

let server = net.createServer((socket) => {
    console.log("New connection!");

    socket.on("data", (data) => {
        console.log("Receive data:");
        console.log(data.toString());
    });
    socket.on("end", () => {
        console.log(data.toString());
    });
    socket.on("end", () => {
        console.log("Connection closed.")
    });
});

server.listen(5000, "127.0.0.1", () => {
    console.log("Server is listening on 127.0.0.1:5000");
})