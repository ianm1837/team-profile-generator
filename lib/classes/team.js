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

	getManager(){
		return this.manager
	}

	getManagerHTML(){
		return this.managerHTML
	}

	getEngineers(){
		return this.engineers
	}

	getEngineerHTML(){
		return this.engineerHTML
	}

	getInterns(){
		return this.interns
	}

	getInternHTML(){
		return this.internHTML
	}
}

module.exports = Team