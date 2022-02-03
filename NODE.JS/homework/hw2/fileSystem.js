const fs = require("fs/promises");

const fileSystemOps = async(pathToFile, content) => {
    await fs.writeFile(pathToFile, content);
    const fileData = await fs.readFile(pathToFile);
    return fileData.toString();
}

module.exports = fileSystemOps;