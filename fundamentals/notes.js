console.log("Starting Notes");

module.exports.age = 21;

module.exports.addNote = () => {
    console.log('add note');
    return 'new note';
}

module.exports.add = (a, b) => {
    return a + b;
}