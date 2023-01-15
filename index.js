const buildTeam = require('./lib/functions/buildTeam');
const createHTML = require('./lib/functions/createHTML');
const writeToFile = require('./lib/functions/writeToFile');
const path = require('path');

const generatedFileName = path.join(__dirname, 'dist', 'team-info.html');

async function init() {

	//begin user prompts for building team
	let team = await buildTeam();

	//build html
	let html = await createHTML(team);

	//write html to file
	await writeToFile(generatedFileName, html);

	console.log('Your team profile has been created! Look for index.html in the dist folder.')

}

init();