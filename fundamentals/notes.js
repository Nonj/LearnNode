

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
        let obj = [];
        var pastNotes = fs.readFileSync('notes-data.json')
        obj = JSON.parse(pastNotes);
        return obj;
    } catch (e) {
        console.log("Step 2 Err \n");
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
    console.log('get all notes lul');
}

var getNote = (title) => {
    console.log('Grabbing note for', title);
    let notes = fetchNotes();
    let note = notes.filter((notes) => notes.title === title);
    console.log(note);
    return note;

}

var deleteNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}


module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
};