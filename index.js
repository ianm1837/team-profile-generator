const createTeam = require('./src/createTeam');
const createHTML = require('./src/createHTML');
const createFile = require('./src/createFile');
const path = require('path');

const filePath = path.join(__dirname, 'dist', 'team-info.html');

async function init() {

	//begin user prompts for building team
	let team = await createTeam();

	//build html
	let html = await createHTML(team);

	//write html to file
	await createFile(filePath, html);

	console.log('Your team profile has been created! Look for index.html in the dist folder.')

}

init();