"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = '/Users/wonsang/Downloads';
// fs.readdir(path,
//   { withFileTypes: true },
//   (err, files) => {
//     if (err) {
//       console.error('ERROR', err)
//       return
//     }
//     files.forEach(file => {
//       if (file.isDirectory()) {
//         console.log('dir:', file.name)
//       }
//       if (file.isFile()) {
//         console.log('file:', file.name)
//       }
//     })
//     console.log(files.length)
//   }
// )
var files = fs.readdirSync(path, { withFileTypes: true });
var sortedFiles = files
    .map(function (file) { return ({
    type: file.isDirectory() ? 'dir' : 'file',
    name: file.name
}); })
    .sort(function (f1, f2) { return f1.type.localeCompare(f2.type); });
sortedFiles.forEach(function (_a) {
    var type = _a.type, name = _a.name;
    console.log("".concat(type, ": ").concat(name));
});
