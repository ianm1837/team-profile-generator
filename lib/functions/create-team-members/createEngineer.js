const Engineer = require('../../classes/engineer')
const inquirer = require('inquirer');

async function createEngineer() {

	function requireUserInput(input){
		if (input == ""){
			return 'Entry cannot be blank!'
		}
		else{
			return true
		}
	}

	let newEngineer = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the engineer's name?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the engineer's ID?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the engineer's email?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'github',
			message: "What is the engineer's Github username??",
			validate: requireUserInput
		}
	]);

	let engineer = new Engineer(
		newEngineer.name,
		newEngineer.id,
		newEngineer.email,
		newEngineer.github
	);

	return engineer;
}

module.exports = createEngineer;