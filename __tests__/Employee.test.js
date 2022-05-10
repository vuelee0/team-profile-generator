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