class Team {
	constructor(manager, engineers, interns) {
		this.manager = manager;
		this.engineers = engineers;
		this.interns = interns;
	}
	addManager(manager) {
		this.manager = manager;
	}
	addEngineer(engineer) {
		this.engineers.push(engineer);
	}
	addIntern(intern) {
		this.interns.push(intern);
	}
}

module.exports = Team