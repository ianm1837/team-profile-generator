const { createManager } = require('../inquirer-prompts/createManager.js');
const { createEngineer } = require('../inquirer-prompts/createEngineer.js');
const { createIntern } = require('../inquirer-prompts/createIntern.js');
const { getNextStep } = require('../inquirer-prompts/getNextStep.js');
const { Team } = require('../classes/Team.js');



async function buildTeam() {

	let team = new Team();

	if (!manager) {
		let manager = createManager();
		team.addManager(manager);
	}

	while(answer !== answer.finished.index == 1){

		let answer = await getNextStep();

		if (answer.finished.index === 2) {
			let engineer = await createEngineer();
			team.addEngineer(engineer);
		}
		else if (answer.finished.index === 3) {
			let intern = await createIntern();
			team.addIntern(intern);
		}
	}

	return team;
}

exports.buildTeam = buildTeam;