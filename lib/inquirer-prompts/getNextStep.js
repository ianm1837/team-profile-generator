const { inquirer } = require('inquirer');

async function getNextStep () {
	 let answer = inquirer.prompt([
		{
			type: 'list',
			name: 'finished',
			message: 'What would you like to do next?',
			choices: ['Finish building my team', 'Add an Engineer', 'Add an Intern']
		}
	]);
}

export { getNextStep }