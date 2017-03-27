const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const chatHandler = require('./socketEndpoints/chat');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/marked.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'marked.js'));
})

io.of('/chat').on('connection', chatHandler);


http.listen(9999, () => {
    console.log('Listening on localhost:9999');
});