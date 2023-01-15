class Team {
	constructor(manager, managerHTML, engineers, engineerHTML, interns, internHTML) {
		this.manager = manager;
		this.engineers = engineers;
		this.interns = interns;
		this.managerHTML = managerHTML;
		this.engineerHTML = engineerHTML;
		this.internHTML = internHTML;
	}

	addManager(manager) {
		this.manager = manager;
	}

	addEngineer(engineer) {
		if (this.engineers == undefined){
			this.engineers = []
		}
		this.engineers.push(engineer);
	}

	addIntern(intern) {
		if (this.interns == undefined){
			this.interns = []
		}
		this.interns.push(intern);
	}

	addManagerHTML(managerHTML) {
		this.managerHTML = managerHTML;
	}

	addEngineerHTML(engineerHTML) {
		if (this.engineerHTML == undefined){
			this.engineerHTML = engineerHTML
		}

		else{
			this.engineerHTML += engineerHTML;
		}
	}

	addInternHTML(internHTML) {
		if (this.internHTML == undefined){
			this.internHTML = internHTML
		}
		else{
			this.internHTML += internHTML;
		}
	}

	//TODO: add getters for manager, managerHTML, engineers, engineerHTML, interns, internHTML in order to complete test
}

module.exports = Team