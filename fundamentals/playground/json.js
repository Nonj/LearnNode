

// Json to String

// var obj = {
//     name: 'Non'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// String to Json

// var personString = '{"Name": "Non", "Age":21}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
const fs = require('fs');


var orginalNote = {
    title: 'Some Title',
    body: 'Somebody'
}

// OrginalNoteString writes note into file
var orginalNoteString = JSON.stringify(orginalNote);
fs.writeFileSync('notes.json', orginalNoteString)

// Reading note from file var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);
