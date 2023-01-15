const Manager = require('../../classes/manager')
const inquirer = require('inquirer');

async function createManager() {

	function requireUserInput(input){
		if (input == ""){
			return 'Entry cannot be blank!'
		}
		else{
			return true
		}
	}

	let newManager = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the team manager's name?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the team manager's ID?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the team manager's email?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'officeNumber',
			message: "What is the team manager's office number?",
			validate: requireUserInput
		}
	]);

	let manager = new Manager(
		newManager.name, 
		newManager.id, 
		newManager.email, 
		newManager.officeNumber);

	return manager;
}

module.exports = createManager;