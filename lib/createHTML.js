const { layout } = require("./layout");
const { createManager } = require("./inquirer-prompts/createManager");
const { createEngineer } = require("./inquirer-prompts/createEngineer");
const { createIntern } = require("./inquirer-prompts/createIntern");

async function createHTML(team) {
	
	let html = await
		layout(
			createManager(team.manager),
			createEngineer(team.engineers),
			createIntern(team.interns)
			);

	return html;
}

export { createHTML };