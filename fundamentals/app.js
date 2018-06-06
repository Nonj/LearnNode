console.log("starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// Grabs user info
var user = os.userInfo();

console.log(notes.addNote());
console.log(notes.add(5, 15));

// Appends text to end of file;
// fs.appendFile('greetings.txt', `\nHello ${user.username}! You are ${notes.age}.\n`, (err) => {
//     if (err) {
//         console.log("unable to write to file");
//     }
// });