const { buildTeam } = require('./utils/buildTeam.js');
const { buildHTML } = require('./utils/buildHTML.js');
const { writeToFile } = require('./utils/writeToFile.js');

async function init() {

	//begin user prompts for building team
	let team = await buildTeam();

	//build html
	let html = await buildHTML(team);

	//write html to file
	writeToFile(html);

}

init();