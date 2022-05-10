const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Donnie', 12345, 'donnieyen@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name as an object', () => {
    const employee = new Employee('Donnie');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id as an object', () => {
    const employee = new Employee('Donnie', 12345, 'donnieyen@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email as an object', () => {
    const employee = new Employee('Donnie', 12345, 'donnieyen@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('getRole should Returns Employee', () => {
    const employee = new Employee('Donnie', 12345, 'donnieyen@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});