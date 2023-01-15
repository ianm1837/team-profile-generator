const createManagerHTML = require("./html-templates/createManagerHTML");
const createEngineerHTML = require("./html-templates/createEngineerHTML")
const createInternHTML = require("./html-templates/createInternHTML")
const createFullHTML = require("./html-templates/createFullHTML");

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

	return createFullHTML(team.managerHTML, team.engineerHTML, team.internHTML)
}

module.exports = createHTML;