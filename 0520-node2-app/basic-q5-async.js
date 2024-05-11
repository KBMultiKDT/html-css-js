// Node.js에서 프로미스로 비동기 처리하기  

const fs = require("fs").promises;

fs.readdir("./")
    .then((result) => console.log(result))
    .then((result) => console.log("Code is done."))
    .catch((err) => console.error(err));

//////////////////////
async function readDirectory() {
    try {
        const result = await fs.readdir("./");
        console.log(result);
        console.log("Code is done.");
    } catch (err) {
        console.error(err);
    }
}


readDirectory();