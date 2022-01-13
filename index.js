// require your server and launch it
const server = require('./api/server.js');

const Port = 9000;

server.listen(Port, () => {
    console.log('Listening on port 9000');
})