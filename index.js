const inquirer = require('inquirer');
const fs = require('fs');
require('./utils/buildTeam.js')
require('./utils/createManager.js')
require('./utils/createEngineer.js')
require('./utils/createIntern.js')
require('./utils/buildTeam.js')
require('./utils/buildHTML.js')
require('./utils/writeToFile.js')

async function init() {
	//begin user prompts for building team
	let team = await buildTeam();
	//build html
	let html = await buildHTML(team);
	//write html to file
	await writeToFile(html);
}

init();