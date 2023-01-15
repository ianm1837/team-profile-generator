const Intern = require('../../classes/intern')
const inquirer = require('inquirer');

async function createIntern() {

	function requireUserInput(input){
		if (input == ""){
			return 'Entry cannot be blank!'
		}
		else{
			return true
		}
	}

	let newIntern = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the intern's name?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the intern's ID?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the intern's email?",
			validate: requireUserInput
		},
		{
			type: 'input',
			name: 'school',
			message: "What is the intern's school?",
			validate: requireUserInput
		}
	]);

	let intern = new Intern(
		newIntern.name,
		newIntern.id,
		newIntern.email,
		newIntern.school
	);

	return intern;
}

module.exports = createIntern;