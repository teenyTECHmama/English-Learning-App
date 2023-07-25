const express = require('express');

const app = express();

const port = 3000;

const path = require('path')

app.get('/index.html', (req,res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.get('/pages/game_menu.html', (req,res) => {
    res.sendFile(path.join(__dirname,'/pages/game_menu.html'));
});

app.get('/pages/countries.html', (req,res) => {
    res.sendFile(path.join(__dirname,'/pages/countries.html'));
});

app.get('/pages/story.html', (req,res) => {
    res.sendFile(path.join(__dirname,'/pages/story.html'));
});

app.get('/pages/soccer.html', (req,res) => {
    res.sendFile(path.join(__dirname,'/pages/soccer.html'));
});

app.listen(port, ()=> console.log('Server is now listening on port', port));
