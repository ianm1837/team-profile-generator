class Engineer {
	constructor(name, id, email, github) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.github = github;
	}
}

async function createEngineer() {
	let newEngineer = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the engineer's name?"
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the engineer's ID?"
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the engineer's email?"
		},
		{
			type: 'input',
			name: 'github',
			message: "What is the engineer's Github username??"
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

export { createEngineer, Engineer };