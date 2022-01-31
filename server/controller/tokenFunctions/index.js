require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  //access token 생성
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },

  // 쿠키로 access token 전달
  sendAccessToken: (res, accessToken) => {
    return res.cookie("jwt", accessToken, {
      // httpOnly: true,
      domain: "mobees.tk",
      path: "/",
      // httpOnly: true,
      secure: true,
      sameSite: "None",
    });
  },
  // access token 유효성 확인
  checkAccessToken: (req) => {
    const accessToken = req.cookies.jwt;
    if (!accessToken) {
      // 토큰이 없는 경우
      console.log("토큰이 없는 경우");
      return null;
    }
    try {
      return verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      // 토큰이 잘못된 경우
      console.log("토큰이 잘못된 경우");
      console.log(err);
      return null;
    }
  },
};
