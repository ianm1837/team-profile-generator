const createManager = require('./createManager');
const createEngineer = require('./worker-functions/createEngineer');
const createIntern = require('./createIntern');
const inquirer = require('inquirer');
const Team = require('../classes/team');

async function createTeam() {

	let team = new Team();

	team.addManager(await createManager());

	while(true) {

		let answer = inquirer.prompt([
			{
				type: 'list',
				name: 'nextStep',
				message: 'What would you like to do next?',
				choices: ['Finish building my team', 'Add an Engineer', 'Add an Intern']
			}
		])

		if (answer.nextStep === 'Finish building my team') {
			return team
		}

		if (answer.nextStep === 'Add an Engineer') {
			team.addEngineer(
				await createEngineer()
				);
		}

		else if (answer.nextStep === 'Add an Intern') {
			team.addIntern(
				await createIntern()
				);
		}
	}
}

module.exports = createTeam;