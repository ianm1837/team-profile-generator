const Employee = require('../../lib/classes/employee.js');

test('Employee class test', () => {
	const employee = new Employee('John Doe', 1, 'john.doe@example.com');
	expect(employee.getName()).toBe('John Doe');
	expect(employee.getId()).toBe(1);
	expect(employee.getEmail()).toBe('john.doe@example.com');
	expect(employee.getRole()).toBe('Employee');
});