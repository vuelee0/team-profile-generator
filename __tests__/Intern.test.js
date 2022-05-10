const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Donnie', 12345, 'donnieyen@gmail.com', 'schoolName');

    expect(intern.schoolName).toEqual(expect.any(String));
});

test('gets intern school as an object', () => {
    const intern = new Intern('Donnie', 12345, 'donnieyen@gmail.com', 'schoolName');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('getRole overridden to return Intern', () => {
    const intern = new Intern('Donnie', 12345, 'donnieyen@gmail.com', 'schoolName');

    expect(intern.getRole()).toEqual('Intern');
});