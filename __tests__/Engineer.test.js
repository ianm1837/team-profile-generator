const Engineer = require('../lib/new-classes/engineer.js');

test('Engineer class test', () => {
	const engineer = new Engineer('John Doe', 1, 'john.doe@example.com','githubUsername');
	expect(engineer.getName()).toBe('John Doe');
	expect(engineer.getId()).toBe(1);
	expect(engineer.getEmail()).toBe('john.doe@example.com');
	expect(engineer.getRole()).toBe('Engineer');
	expect(engineer.getGithub()).toBe('githubUsername')
});