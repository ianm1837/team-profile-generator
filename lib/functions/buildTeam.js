const createManager = require('../inquirer-prompts/createManager');
const createEngineer = require('../inquirer-prompts/createEngineer');
const createIntern = require('../inquirer-prompts/createIntern');
const getNextStep = require('../inquirer-prompts/getNextStep');
const Team = require('../classes/team');

async function buildTeam() {

	let team = new Team();

	team.addManager(await createManager());

	while(true) {

		let answer = await getNextStep();

		if (answer.finished === 'Finish building my team') {
			return team
		}

		if (answer.finished === 'Add an Engineer') {
			team.addEngineer(await createEngineer());
		}

		else if (answer.finished === 'Add an Intern') {
			team.addIntern(await createIntern());
		}
	}
}

module.exports = buildTeam;