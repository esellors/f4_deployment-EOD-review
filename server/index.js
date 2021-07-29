const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
 
app.get('/cat', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/cat.jpg'))
})

app.get('/js', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/main.js'))
})

app.get('/awesome-css', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/styles.css'))
})

const port = process.env.PORT || 5050;
app.listen(port, function() {
    console.log(`Server running on ${port}`)
})