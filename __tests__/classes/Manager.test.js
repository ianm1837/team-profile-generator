const Manager = require('../../lib/classes/manager.js');

test('Manager class test', () => {
	const manager = new Manager('John Doe', 1, 'john.doe@example.com','officeNumber');
	expect(manager.getName()).toBe('John Doe');
	expect(manager.getId()).toBe(1);
	expect(manager.getEmail()).toBe('john.doe@example.com');
	expect(manager.getRole()).toBe('Manager');
	expect(manager.getOfficeNumber()).toBe('officeNumber')
});