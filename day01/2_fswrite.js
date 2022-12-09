const fs = require("fs");

const text = "사쿠라는 존예다!";
const fsPromise = fs.promises;

fs.writeFile("./text1.txt", text, "utf-8", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("파일이 정상적으로 저장되었습니다.");
    }
});

try {
    fs.writeFileSync("./text2.txt", text, "utf-8");
} catch (err) {
    console.log(err);
}

fsPromise
    .writeFile("./text3.txt", text, "utf-8")
    .then(() => {
        console.log("파일이 정상적으로 저장되었습니다.");
    })
    .catch((err) => {
        console.log(err);
    });
