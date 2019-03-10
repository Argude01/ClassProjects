const express = require('express');
const app = express();
const server = 4000;

app.use(express.static('public'));
app.listen(server, ()=>{console.log(`SERVER ON PORT: ${server}`)});