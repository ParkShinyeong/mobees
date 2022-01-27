const { user } = require("../../models");
const { checkAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  // console.log("요청을 받나요?")
  const accessTokenData = checkAccessToken(req);

  // 쿠키에 토큰이 존재하고, 토큰이 유효하면 해당 유저의 정보를 리턴해준다.
  // 쿠키에 토큰이 없거나, 잘못된 토큰일 경우, 'not authorrized'를 리턴해준다.

  if (!accessTokenData) {
    return res.status(401).send({ data: null, message: "not authorized" });
  }
  // console.log("토큰받음");
  const { email } = accessTokenData;

  user
    .findOne({
      where: {
        email,
      },
    })
    .then((data) => {
      delete data.dataValues.password;
      return res
        .status(200)
        .send({ data: { userInfo: data.dataValues }, message: "ok" });
    });
};
