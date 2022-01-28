const express = require("express");
const app = express();
const indexRouter = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 80;
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
    origin: true, // 수정 3001
    // origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use("/", indexRouter);
// app.get('/', (req, res) => {
//   res.send("Hello world")
// })

app.listen(port, () => {
  console.log(
    ` - -  - - -- -  🐝  🐝  🐝  서버가 ${port}번에서 작동중입니다.  🐝  🐝  🐝 - - - -- - - `
  );
});
