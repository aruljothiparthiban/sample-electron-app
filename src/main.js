const {app, BrowserWindow} = require('electron');;
const url = require('url'); 
const path = require('path');
const server = require('./api/server');

let win;  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600});
   win.loadURL('http://localhost:8080'); 
//    win.loadURL(url.format ({ 
//       pathname: path.join(__dirname, 'index.html'), 
//       protocol: 'file:', 
//       slashes: true 
//    }));
   
};

app.on('ready', function(){
    let port = process.env.PORT || 8080;
    server.listen(port, function(){
        console.log('application listening on port:', port);
        createWindow();
    });
});