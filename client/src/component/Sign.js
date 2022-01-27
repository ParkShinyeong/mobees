import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import logo from "../icon/logo_v1.png";

const SignUp_div = styled.div`
  width: 1024px;
  height: 540px;
  margin: 180px auto 85px auto;
  position: relative;
  > ul {
    width: 57%;
    height: 590px;
    margin: 0 auto;
    list-style: none;
    padding-left: 0;
    border-radius: 8px;
    box-sizing: border-box;
    /* background-color: aquamarine; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #8b8585;

    > .signUp_logo {
      width: 200px;
      height: 140px;
      /* background-color: #ddd; */
      margin: 40px auto 30px auto;
      box-sizing: border-box;
      border-bottom: 1px solid #8b8585;
      /* border: 1px solid #8b8585; */
      > ul {
        list-style: none;
        padding-left: 0;

        > li {
          margin-top: 8px;
          color: #2b2828;
        }
        > .image {
          width: 130px;
          height: 30px;
          position: absolute;
          left: 39%;
          margin: 9px auto;
        }
      }
    }

    > .signUp_list {
      width: 260px;
      height: 280px;
      /* background-color: #ddd; */
      /* border: 1px solid #8b8585; */
      margin: 0 auto;
      > .loginId {
        width: 252px;
        height: 35px;
        margin: 11px auto 15px auto;
      }
      > .nickname {
        width: 252px;
        height: 35px;
        margin: 15px auto;
      }
      > .password {
        width: 252px;
        height: 35px;
        margin: 15px auto;
      }
      > .repassword {
        width: 252px;
        height: 35px;
        margin: 15px auto;
      }
      > .join_div {
        width: 252px;
        height: 35px;
        /* background-color: cadetblue; */
        position: relative;
        margin-top: 15px;
        > .join_btn {
          width: 95px;
          height: 38px;
          border-radius: 3px;
          background-color: #2b2828;
          cursor: pointer;
          line-height: 38px;
          margin-left: 25px;
          border-radius: 20px;
          cursor: pointer;
          background-color: rgb(0, 0, 0, 0.1);
          color: rgb(0, 0, 0, 0.5);
          &:hover {
            background-color: #ffd900;
            color: #2b2828;
          }
        }

        > .cancle {
          width: 95px;
          height: 37px;
          /* border: 1px solid #2b2828; */
          cursor: pointer;
          border-radius: 20px;
          line-height: 37px;
          right: 7%;
          position: absolute;
          color: rgb(0, 0, 0, 0.5);
          top: 0;
          background-color: rgb(0, 0, 0, 0.1);
          &:hover {
            background-color: rgb(0, 0, 0, 0.15);
            color: #2b2828;
          }
        }
      }
    }
  }
`;

const Sign = () => {
  const history = useHistory();
  return (
    <SignUp_div>
      <ul>
        <li className="signUp_logo">
          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "23px",
                textAlign: "center",
              }}
            >
              WELCOME
            </li>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              TO
            </li>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              MoBees
            </li>
            {/* <img className="image" src={logo}></img> */}
          </ul>
        </li>
        <li className="signUp_list">
          <input
            name="email"
            className="loginId"
            type="text"
            placeholder="이메일을 입력해주세요."
            // style="border: 1px solid #ddd;"
            // onChange={this.loginHandler}
          />
          <input
            name="nickname"
            className="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."

            // onChange={this.loginHandler}
          />
          <input
            name="password"
            className="password"
            type="password"
            placeholder="비밀번호는 4-12자리의 숫자,영문이어야 합니다."
            maxLength="12"

            // onChange={this.loginHandler}
          />
          <input
            name="password"
            className="repassword"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
            maxLength="12"

            // onChange={this.loginHandler}
          />
          <div className="join_div">
            <div
              className="join_btn"
              onClick={() => {
                history.push("/");
                // closeModal();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  // color: "#FCFCFC",
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                가입하기
              </p>
            </div>
            <div
              className="cancle"
              onClick={() => {
                history.push("/");
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  // color: "#2b2828",
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                취소
              </p>
            </div>
          </div>
        </li>
      </ul>
    </SignUp_div>
  );
};

export default Sign;
