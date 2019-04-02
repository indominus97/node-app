const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('disconnect', (socket) => {
        console.log('Disconnected');
    });
});

server.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});