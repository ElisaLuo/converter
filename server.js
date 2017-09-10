const express = require('express');
const app = express();
const path = require('path');

//app set up
app.use(express.static(__dirname+'/dist'));//uploads angular content
app.use(express.static(__dirname+'/src'));//uploads src folder content
app.listen(process.env.PORT || 8080);

//sets up route for app
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})