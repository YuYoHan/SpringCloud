// // express 사용안하고 구현
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
//     if (req.url === "/") {
//         req.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });

// express 사용
// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use → 미들 웨어를 등록해주는 메소드

app.listen(PORT, () => {
    console.log("서버 가동");
});
