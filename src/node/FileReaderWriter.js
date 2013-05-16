var fs = require("fs");

function getFileName(key) {
    return ("./resources/" + key + ".txt");
}

exports.read = function(key) {
    return fs.readFileSync(getFileName(key), {encoding: "ascii"});
};

exports.write = function(key, value) {
    return fs.writeFileSync(getFileName(key), value, {encoding: "ascii"});
};

