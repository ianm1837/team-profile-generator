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
		console.log("adding engineer - before: " + this.engineers)
		if (this.engineers == undefined){
			this.engineers = []
		}
		this.engineers.push(engineer);
		console.log("adding engineer - after: " + JSON.stringify(this.engineers,null, 2))
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

		debugger

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
}

module.exports = Team