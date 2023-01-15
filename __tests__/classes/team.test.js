const Team = require('../../lib/classes/team.js');

test('Team class test', () => {
	//manager, managerHTML, engineers, engineerHTML, interns, internHTM
	const team = new Team('manager', 'managerHTML', 'engineers', 'engineerHTML', 'interns', 'internHTML');
	expect(team.getManager()).toBe('manager');
	expect(team.getManagerHTML()).toBe('managerHTML');
	expect(team.getEngineers()).toBe('engineers');
	expect(team.getEngineerHTML()).toBe('engineerHTML');
	expect(team.getInterns()).toBe('interns')
	expect(team.getInternHTML()).toBe('internHTML')
});