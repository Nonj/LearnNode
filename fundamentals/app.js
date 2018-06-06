console.log("starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash')

// Grabs user info
var user = os.userInfo();

console.log(notes.addNote());
console.log(notes.add(5, 15));
console.log(_.isString(true));
console.log(_.isString('n'));
console.log(_.uniq(['Non', 'Non', 1, 2, 3, 1, 2, 3]));

// Appends text to end of file;
// fs.appendFile('greetings.txt', `\nHello ${user.username}! You are ${notes.age}.\n`, (err) => {
//     if (err) {
//         console.log("unable to write to file");
//     }
// });