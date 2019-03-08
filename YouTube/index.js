const express = require('express');
const app = express();
const server = 3333;

app.use(express.static('public'));
app.listen(server, ()=>{console.log(`SERVER ON PORT: ${server}`)});