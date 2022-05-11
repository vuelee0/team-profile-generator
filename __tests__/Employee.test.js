const Employee = require('../lib/Employee.js');
const employee = new Employee('Donnie', 12345, 'donnieyen@gmail.com');


test('creates a employee object', () => {

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name as an object', () => {

    expect(employee.getName()).toEqual(expect.any(String));
});


test('gets employee id as an object', () => {

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email as an object', () => {

    expect(employee.getEmail()).toEqual(expect.any(String));
});


test('getRole should Returns Employee', () => {
    const employee = new Employee('Donnie', 12345, 'donnieyen@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});