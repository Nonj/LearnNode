console.log("Starting Notes");

// Example export add
// module.exports.add = (a, b) => {
//     return a + b;
// }

// Function to add notes 
var addNote = (title, body) => {
    console.log(`Adding Note\n${title}\n${body}`);
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