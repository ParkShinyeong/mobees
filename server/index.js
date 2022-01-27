const express = require("express");
const app = express();
const indexRouter = require("./routes");
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 3001;
const models = require("./models/index.js");

models.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log("연결 실패");
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // post 요청 바디 추출
app.use(cookieParser()); // 쿠키 추출

app.use(
  cors({
    origin: ["https://localhost:3000"], // 수정 3001
    // origin : true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use("/", indexRouter);
app.get("/", (req, res) => {
  res.send("Hello world");
});

// const HTTPS_PORT = process.env.HTTPS_PORT || 3001;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
// let server;
// if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
//   const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
//   const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
//   const credentials = { key: privateKey, cert: certificate };

//   server = https.createServer(credentials, app);
//   server.listen(HTTPS_PORT, () => console.log("https server runnning"));
// } else {
//   server = app.listen(HTTPS_PORT, () => console.log("http server runnning"));
// }

module.exports = server;
app.listen(port, () => {
  console.log(
    ` - -  - - -- -  🐝  🐝  🐝  서버가 ${port}번에서 작동중입니다.  🐝  🐝  🐝 - - - -- - - `
  );
});
