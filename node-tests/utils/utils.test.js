const utils = require('./utils')

it('Should add two numbers', ()=> {
    let res = utils.add(33,11);
    if (res !== 44) {
        throw new Error(`Value not correct, got ${res}.`);
    }
});

it('Should return the squared number.', () => {
    let res = utils.square(11)
    if (res !== 121) {
        throw new Error(`Wrong value: ${res}`)
    }
})