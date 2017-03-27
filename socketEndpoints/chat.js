
const handler = (socket) => {
    console.log('A user connected');

    socket.broadcast.emit('client connected', 'John Doe' );
    socket.data = {};
    socket.data.username = 'John Doe';

    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg);

        socket.broadcast.emit('chat message', {
            name: socket.data.username,
            message: msg
        });
    })

    socket.on('change name', (newName) => {
        console.log('Changing name from ' + socket.client.id);
        console.log('Old name ' + socket.data.username + ' to ' + newName);
        socket.data.username = newName;
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
        socket.broadcast.emit('chat message', {
            name: socket.data.username,
            message: 'I disconnected'
        })
    })
}

module.exports = handler;