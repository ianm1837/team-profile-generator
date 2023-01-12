const fs = require('fs');

async function writeToFile(path, data) {
	try {
		fs.writeFile(path, data);
	} catch (err) {
		console.log(err);
	}
}

export { writeToFile };