const fs = require('fs');

async function writeToFile(path, data) {
	try {
		fs.writeFileSync(path, data);
	} catch (err) {
		console.log(err);
	}
}

module.exports = writeToFile;