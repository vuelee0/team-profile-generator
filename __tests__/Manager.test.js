const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Donnie', 12345, 'donnieyen@gmail.com', 100);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getRole overridden to return Manager', () => {
    const manager = new Manager('Donnie', 12345, 'donnieyen@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});