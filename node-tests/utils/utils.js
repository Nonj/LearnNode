module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullname) => {
    let names = fullname.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user
}
