let square = (x) => {
    return x * x;
}
//or 
let square1 = (x) => x * x;

let user = {
    name: 'Non',
    // Undefined
    sayhi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    // Works
    sayHiAlt () {
        console.log(`Hi. I'm ${this.name}`)
    }
}

user.sayhi();