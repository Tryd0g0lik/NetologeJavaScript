

//
// const g = (async function (path) {
//     try {
//         const fd = await open(path);
//         console.log(`successfully deleted ${path}`);
//         const stream = fd.createReadStream()
//         console.log(`stream: ${stream}`)
//         return stream
//     } catch (error) {
//         console.error('there was an error:', error.message);
//     }
// }('./root.txt'));
//
// async function r(){
//     let t = g
//
//     for (let d in t)
//         console.log(await d)
// }
//
// r()
//

// function g (path='./root.txt') {
// path='./root.txt'
const open = require("fs");
// const fd = open.readFile(path)
// fd.on("data", function g(data){
//     data.toString()
// })
//

    //
    // const fd = await open(path, 'r');
    // console.log(`successfully deleted ${path}`);
    // const stream = fd.createReadStream(options ={start: 0})
//     //
//     return stream
// }

// g()

// function d()
// {
//
//     open.readFile('./root.txt', {encoding: 'utf8'}, function (err, data) {
//         let datas;
//         if (!err) {
//             console.log(22)
//             datas += data
//         }
//     })
//
// }
// console.log(d())
import {FILE} from "dns";
new File(fileParts, fileName, [options])
function readFile() {
    let file = './root.txt' //input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        console.log(reader.result);
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
}

readFile()