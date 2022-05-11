const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Donnie', 12345, 'donnieyen@gmail.com', 'donnieyen0');


test('creats a engineer object', () => {

    expect(engineer.github).toEqual(expect.any(String));
});


test('gets engineer github as an object', () => {

    expect(engineer.getGithub()).toEqual(expect.any(String));
});


test('getRole overridden to return Engineer', () => {

    expect(engineer.getRole()).toEqual('Engineer');
});