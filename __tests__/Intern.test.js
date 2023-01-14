const Intern = require('../lib/new-classes/intern.js');

test('Intern class test', () => {
	const intern = new Intern('John Doe', 1, 'john.doe@example.com','schoolName');
	expect(intern.getName()).toBe('John Doe');
	expect(intern.getId()).toBe(1);
	expect(intern.getEmail()).toBe('john.doe@example.com');
	expect(intern.getRole()).toBe('Intern');
	expect(intern.getSchool()).toBe('schoolName')
});