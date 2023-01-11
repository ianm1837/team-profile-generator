const inquirer = require('inquirer');
const fs = require('fs');

class Manager {
	constructor(name, id, email, officeNumber) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.officeNumber = officeNumber;
	}
}

class Engineer {
	constructor(name, id, email, github) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.github = github;
	}
}

class Intern {
	constructor(name, id, email, school) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.school = school;
	}
}

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
let team;

async function init() {
	let manager = await createManager();
	checkIfFinished();
}

async function createManager() {

}

async function addTeamMember(teamMemberRole) {
	if (teamMemberRole === 'Engineer') {
		let engineer = await createEngineer();
		engineers.push(engineer);
	} else if (teamMemberRole === 'Intern') {
		let intern = await createIntern();
		interns.push(intern);
	}
}

async function createEngineer() {

	checkIfFinished()
}

async function createIntern() {

	checkIfFinished()
}

async function createTeam() {
	let team = new Team(manager, engineers, interns);
	return team;
}

async function checkIfFinished() {
	let answer = await inquirer.prompt([
		{
			type: 'list',
			name: 'finished',
			message: 'What would you like to do next?',
			choices: ['Finish building my team', 'Add an Engineer', 'Add an Intern']
		}
	]);
	if (answer.finished.index === 0) {
		let team = await createTeam();
		writeToFile('team.html', team);
	} else if(answer.finished.index === 1) {
		createEngineer()
	} else if(answer.finished.index === 2) {
		createIntern()
	}
}

async function writeToFile(fileName, data) {

}

init();

// ### Team manager info
// Team manager's name
// Employee ID
// email address
// Office Number

// enter menu asking to add another intern or engineer or finish

// ### Engineer's info
// Name
// ID
// Email
// Github

// enter menu asking to add another intern or engineer or finish

// ### Intern info
// Name
// ID
// Email
// School

// enter menu asking to add another intern or engineer or finish

