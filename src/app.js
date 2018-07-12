const server = require('./api/server');

let port = process.env.PORT || 8080;
server.listen(port, function () {
    console.log('application listening on port:', port);
});