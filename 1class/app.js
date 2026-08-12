// const fs = require('fs');
// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log(data);
// fs.writeFileSync('notes.txt', 'This file is created by Node.js');


// const path = require('path');
// const filePath = path.join(__dirname, 'test', 'hello.txt');
// console.log(filePath);

// const os = require('os');
// const userInfo = os.userInfo();
// console.log(userInfo);


// const des = require('./data/des');
// console.log(des);

// const process = require('process');
// console.log(process.argv[3]);

// require(dotenv).config()
// const process = require('process');
// console.log(process.env.PORT);

// const http = require('http');
// require('dotenv').config();
// const process =require ('process');
// const port =process.env.PORT || 3000;
// const server =http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<h1>Hello World</h1>');
//     res.write('<p>This is my first server</p>');
//     res.write('<p>My name is chirag</p>');
//     res.end();

// });

// server.listen(port, () =>{
//     console.log(`Server is running on port ${port} `)
// });

const http = require('http');
require('dotenv').config();
const process = require('process');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/students'){
    res.writeHead(200, {'Content-Type': 'application/json'});  
    res.end(JSON.stringify({ count: students.length, students }));  
    }
    else if(req.method === 'POST' && req.url === '/api/students/count'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'students.length' }));
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});    
