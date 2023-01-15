const fs = require('fs');

async function createFile(path, data) {
	try {
		fs.writeFileSync(path, data);
	} catch (err) {
		console.log(err);
	}
}

module.exports = createFile;