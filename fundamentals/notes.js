console.log("Starting Notes");

// Example export add
// module.exports.add = (a, b) => {
//     return a + b;
// }

const fs = require('fs');

var saveNotes = (notes) => {
    
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))

};

var fetchNotes = () => {
    try {
        var pastNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(pastNotes);
    } catch (e) {
        return [];
    }
};


// Function to add notes 
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };



    var dupNotes = notes.filter((note)  => note.title === title);

    if (dupNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('get all notes');
}

var getNote = (title) => {
    console.log('Grabbing note for', title);
}

var deleteNote = (title) => {
    // fetch notes
    let notes = fetchNotes();
    // Filter notes
    notes = notes.filter((note) => note.title !== title);
    // save new notes
    saveNotes(notes);
}



module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
};