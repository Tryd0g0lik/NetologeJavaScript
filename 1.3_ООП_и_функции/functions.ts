

function _generatingId(_lis) {
    let _lengs = _lis.length;
    if (_lengs == 0 || _lengs == null) {
        return 0;
    }
    return _lengs;
}

function readDbFile(){
    const fs = require('fs'),
        path = require('path'),
        filePath = path.join(__filename, '../../root.json');

    let bufer = fs.readFile(filePath, {encoding: "utf-8"}, function (err, data) {
        if (!err) {
            console.log(`-----: ${data}`)
				const content = data;
				return content
        } else {
				console.log( `${err.name} Error-massege: ${err.message} Error-path: ${err.path}`)
        }

    });



	}



module.exports = {_generatingId, readDbFile}
