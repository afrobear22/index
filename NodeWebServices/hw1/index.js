const fs = require('fs');

// ex.1
const fileAppend = (file, content) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, content, 'utf8', err => {
            if (err) return fail(err);
            return success();
        });
    });
};

fileAppend('test.txt', 'Hello, is this working?')
    .then(() => {
        console.log('File appended successfully');
    }).catch(err => {
        console.log(err);
    });

//
//
// ex.2
const renameFile = (oldFile, newFile) => {
    return new Promise((success, fail) => {
        fs.rename(oldFile, newFile, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

renameFile('test.txt', 'renamed.txt')
    .then(() => {
        console.log('File renamed successfully');
    }).catch(err => {
        console.log(err);
    });



// ex.3
const copyFile = (realFile, copyFile) => {
    return new Promise((success, fail) => {
        fs.copyFile(realFile, copyFile, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

copyFile('test.txt', 'copy.txt')
    .then(() => {
        console.log('File successfully copied');
    }).catch(err => {
        console.log(err);
    });

//
//
// ex.4
const deleteFile = (removeFile) => {
    return new Promise((success, fail) => {
        fs.unlink(removeFile, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

deleteFile('renamed.txt')
    .then(() => {
        console.log('File deleted!');
    }).catch(err => {
        console.log(err);
    });



// ex.5
const accessFile = (file, accessMode) => {
    return new Promise((success, fail) => {
        fs.chmod(file, accessMode, err => {
            if (err) return fail(err);
            return success();
        });
    });
};

accessFile('copy.txt', 0o700)
    .then(() => {
        console.log('RWE permission granted only to Owner')
    }).catch(err => {
        console.log(err);
    });