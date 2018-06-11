

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];


if (command === 'list') {
    notes.getAll();
} else if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log()
    }
} else if (command === 'remove') {
    let noteRemoved = notes.deleteNote(argv.title);

    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message); 
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command not found');
}
