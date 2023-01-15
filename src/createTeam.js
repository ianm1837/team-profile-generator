const createManager = require('./create-team-members/createManager');
const createEngineer = require('./create-team-members/createEngineer');
const createIntern = require('./create-team-members/createIntern');
const inquirer = require('inquirer');
const Team = require('../lib/classes/team')

async function getUserInput(){
	let answer = inquirer.prompt([
		{
			type: 'list',
			name: 'nextStep',
			message: 'What would you like to do next?',
			choices: ['Finish building my team', 'Add an Engineer', 'Add an Intern']
		}
	])

	return answer
}

async function createTeam() {

	let team = new Team();

	team.addManager(await createManager());

	while(true) {

		let answer = await getUserInput()

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