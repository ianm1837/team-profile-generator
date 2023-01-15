const Team = require('../../lib/classes/team.js');

test('Team class test', () => {
	const team = new Team('John Doe', 1, 'john.doe@example.com','officeNumber');
	expect(team.getName()).toBe('John Doe');
	expect(team.getId()).toBe(1);
	expect(team.getEmail()).toBe('john.doe@example.com');
	expect(team.getRole()).toBe('team');
	expect(team.getOfficeNumber()).toBe('officeNumber')
});