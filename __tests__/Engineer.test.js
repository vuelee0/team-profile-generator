const Engineer = require('../lib/Engineer.js');

test('creats a engineer object', () => {
    const engineer = new Engineer('Donnie', 12345, 'donnieyen@gmail.com', 'donnieyen0');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github as an object', () => {
    const engineer = new Engineer('Donnie', 12345, 'donnieyen@gmail.com', 'donnieyen0');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('getRole overridden to return Engineer', () => {
    const engineer = new Engineer('Donnie', 12345, 'donnieyen@gmail.com', 'donnieyen0');

    expect(engineer.getRole()).toEqual('Engineer');
});