const inquirer = require('inquirer');
const { createManager } = require('./createManager.js');
const { createEngineer } = require('./createEngineer.js');
const { createIntern } = require('./createIntern.js');

class Team {
	constructor(manager, engineers, interns) {
		this.manager = manager;
		this.engineers = engineers;
		this.interns = interns;
	}
}

let manager
let engineers = [];
let interns = [];

async function buildTeam() {
	if (manager === undefined) {
		createManager();
	}
	let answer = await inquirer.prompt([
		{
			type: 'list',
			name: 'finished',
			message: 'What would you like to do next?',
			choices: ['Finish building my team', 'Add an Engineer', 'Add an Intern']
		}
	]);
	if (answer.finished.index === 0) {
		let team = new Team(manager, engineers, interns);
		return team;
		// writeToFile('team.html', team);
	} else if(answer.finished.index === 1) {
		createEngineer()
	} else if(answer.finished.index === 2) {
		createIntern()
	}
}

export { buildTeam };