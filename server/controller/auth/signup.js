const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  // 회원 가입 요청을 받습니다.
  // 이미 존재하는 이메일일 경우 =>  상태코드 409
  // 회원 정보가 제대로 입력되지 않았으면 => 상태코드 422

  let { email, user_name, password, phone_number, nickname, birthday } =
    req.body;
  user_name = req.body.user_name || "user";
  if (!email || !password || !nickname) {
    return res
      .status(422)
      .send({ message: "Insufficient parameters supplied" });
  }

  user
    .findOne({
      where: {
        email,
      },
    })
    .then((result) => {
      if (!result) {
        user
          .create({
            email,
            password,
            user_name,
            nickname,
            phone_number,
            birthday,
          })
          .then((data) => {
            delete data.dataValues.password;
            const accessToken = generateAccessToken(data.dataValues);
            sendAccessToken(res, accessToken);
            return res.status(201).send({ data: data, message: "ok" });
          });
      } else {
        return res.status(409).send("email exists");
      }
    });
};
