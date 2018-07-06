const utils = require('./utils')
const expect = require('expect')

it('Should add two numbers', ()=> {
    let res = utils.add(33,11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Value not correct, got ${res}.`);
    // }
});

it('Should return the squared number.', () => {
    let res = utils.square(11);

    expect(res).toBe(121).toBeA('number');

    // if (res !== 121) {
    //     throw new Error(`Wrong value: ${res}`)
    // }
})

it('Should expect some values', ()=> {
    //expect(12).toNotBe(12);
    //expect({name:'on'}).toNotEqual({name:'Non'});
    expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(5);
    expect({
        name: "non",
        age:23,
        location: "seattle"
    }).toExclude({
        age:25
    })
})
// Should verify first and last names are set
// Asserts it includes firstname and lastname with proper values
it('Should set proper values for first name and last name', () => {
    let user = {age: 23, location: 'seattle'}
    let res = utils.setName(user, "Non Bun");

    expect(res).toInclude({
        firstname: "Non",
        lastname: "Bun"
    });
});
