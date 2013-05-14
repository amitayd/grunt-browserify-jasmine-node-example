var fs = require("fs");

exports.hello = function hello() {
    return fs.readFileSync("./resources/hello.txt", {encoding: "ascii"});
};

