const Manager = require('../new-classes/manager')

async function createManager() {
	let newManager = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the team manager's name?"
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the team manager's ID?"
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the team manager's email?"
		},
		{
			type: 'input',
			name: 'officeNumber',
			message: "What is the team manager's office number?"
		}
	]);

	let manager = new Manager(
		newManager.name, 
		newManager.id, 
		newManager.email, 
		newManager.officeNumber);

	return manager;
}

export { createManager };