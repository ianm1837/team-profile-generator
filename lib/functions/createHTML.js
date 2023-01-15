const createManagerHTML = require("../templates/createManagerHTML");
const createEngineerHTML = require("../templates/createEngineerHTML")
const createInternHTML = require("../templates/createInternHTML")
const layout = require("../templates/layout");

async function createHTML(team) {

	team.managerHTML = createManagerHTML(team.manager)

	if (team.engineers){
		for (let i = 0; i < team.engineers.length; i++) {
			team.addEngineerHTML(createEngineerHTML(team.engineers[i]))
		}
	}

	if (team.interns){
		for (let i = 0; i < team.interns.length; i++) {
			team.addInternHTML(createInternHTML(team.interns[i]))
		}
	}

	return layout(team.managerHTML, team.engineerHTML, team.internHTML)
}

module.exports = createHTML;