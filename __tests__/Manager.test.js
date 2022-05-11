const Manager = require('../lib/Manager.js');
const manager = new Manager('Donnie', 12345, 'donnieyen@gmail.com', 100);


test('creates a manager object', () => {

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('getRole overridden to return Manager', () => {

    expect(manager.getRole()).toEqual('Manager');
});