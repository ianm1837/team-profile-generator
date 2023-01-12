const { buildTeam } = require('./lib/buildTeam.js');
const { buildHTML } = require('./lib/buildHTML.js');
const { writeToFile } = require('./lib/writeToFile.js');

const generatedFileName = path.join(__dirname, 'dist', 'team-info.html');

async function init() {

	//begin user prompts for building team
	let team = await buildTeam();

	//build html
	let html = await buildHTML(team);

	//write html to file
	await writeToFile(generatedFileName, html);

	console.log('Your team profile has been created! Look for index.html in the dist folder.')

}

init();