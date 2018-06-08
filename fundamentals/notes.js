console.log("Starting Notes");

// Example export add
// module.exports.add = (a, b) => {
//     return a + b;
// }

const fs = require('fs');

// Function to add notes 
var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };


    try {
        var pastNotes = fs.readFileSync('notes-data.json');
        notes = JSON.parse(pastNotes);
    } catch (e) {

    }

    var dupNotes = notes.filter((note)  => note.title === title);

    if (dupNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }
};

var getAll = () => {
    console.log('get all notes');
}

var getNote = (title) => {
    console.log('Grabbing note for', title);
}

var deleteNote = (title) => {
    console.log("Deleting notes for", title);
}



module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
};