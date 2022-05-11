const Intern = require('../lib/Intern.js');
const intern = new Intern('Donnie', 12345, 'donnieyen@gmail.com', 'schoolName');


test('creates a intern object', () => {

    expect(intern.schoolName).toEqual(expect.any(String));
});


test('gets intern school as an object', () => {

    expect(intern.getSchool()).toEqual(expect.any(String));
});


test('getRole overridden to return Intern', () => {

    expect(intern.getRole()).toEqual('Intern');
});