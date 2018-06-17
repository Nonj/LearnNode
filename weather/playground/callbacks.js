let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Vik'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
    //callback(user);
};

getUser(31, (user) => {
    console.log(user);
});
