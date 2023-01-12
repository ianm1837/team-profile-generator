const inquirer = require('inquirer');
const { createManager } = require('./inquirer-prompts/createManager.js');
const { createEngineer } = require('./inquirer-prompts/createEngineer.js');
const { createIntern } = require('./inquirer-prompts/createIntern.js');
const { getNextStep } = require('./inquirer-prompts/getNextStep.js');

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

	let answer = await getNextStep()

	if (answer.finished.index === 0) {
		let team = new Team(manager, engineers, interns);
		return team;
	} 
	else if(answer.finished.index === 1) {
		createEngineer()
	}
	 else if(answer.finished.index === 2) {
		createIntern()
	}
}

export { buildTeam };