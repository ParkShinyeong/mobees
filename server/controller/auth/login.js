const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  //로그인 정보를 통해 사용자 인증 후 토큰을 전달합니다.
  
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Bad request" });
  }

  user
    .findOne({
      where: {
        email,
        password,
      },
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send("invalid user");
      }

      const userInfo = result.dataValues;
      delete userInfo.password;
      const accessToken = generateAccessToken(userInfo);
      sendAccessToken(res, accessToken);
      res.status(200).send({ message: "ok" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ message: "Internal server error" });
    });
};
