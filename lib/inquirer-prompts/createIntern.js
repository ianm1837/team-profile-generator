class Intern {
	constructor(name, id, email, school) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.school = school;
	}
}

async function createIntern() {
	let newIntern = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the intern's name?"
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the intern's ID?"
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the intern's email?"
		},
		{
			type: 'input',
			name: 'school',
			message: "What is the intern's school?"
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

export { createIntern };