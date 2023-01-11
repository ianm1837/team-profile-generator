const fs = require('fs');

async function writeToFile(data) {
	try {
		fs.writeFile('./team-info.html', data);
	} catch (err) {
		console.log(err);
	}
}

export { writeToFile };