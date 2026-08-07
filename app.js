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

require(dotenv).config()
const process = require('process');
console.log(process.env.PORT);