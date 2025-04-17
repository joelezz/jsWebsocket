const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server); // Attach socket.io to the server

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        console.log('Message:', msg);
        io.emit('chat message', msg); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Listening on *:3000');
});
