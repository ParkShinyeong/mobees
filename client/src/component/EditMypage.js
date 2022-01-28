import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import logo from "../icon/logo_v1.png";
import axios from "axios";

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
      height: 70px;
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
      > input {
        width: 252px;
        height: 35px;
        margin: 11px auto 10px auto;
        outline: none;
      }
      > .join_div {
        width: 252px;
        height: 35px;
        /* background-color: cadetblue; */
        position: relative;
        margin-top: 35px;
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

          > .delete {
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
  }
`;

const EditMypage = ({ userinfo, loading_count }) => {
  const history = useHistory();
  // console.log(userinfo)
  // user_name, nickname, profile_image, phone_number, password
  const [myinfo, setMyinfo] = useState({
    user_name: userinfo.user_name,
    phone_number: userinfo.phone_number,
    profile_image: userinfo.profile_image,
    nickname: userinfo.nickname,
    password: "",
  });

  let { user_name, phone_number, profile_image, password, nickname } = userinfo;
  const handleInputValue = (key) => (e) => {
    setMyinfo({ ...myinfo, [key]: e.target.value });
    console.log("수정중", myinfo);
  };

  const handleSignup = (obj) => {
    const { user_name, phone_number, profile_image, password, nickname } = obj;
    console.log(obj);
    if (password === "") {
      alert("이름, 닉네임, 비밀번호 입력은 필수입니다");
    }
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/users/info`,
        {
          user_name,
          phone_number,
          profile_image,
          password,
          nickname,
        },
        {
          // headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SignUp_div>
      <ul>
        <li className="signUp_logo">
          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              회원정보수정
            </li>
            {/* <img className="image" src={logo}></img> */}
          </ul>
        </li>
        <li className="signUp_list">
          <input
            name="email"
            className="loginId"
            type="text"
            placeholder={user_name ? user_name : "이름을 입력하세요"}
            onChange={handleInputValue("user_name")}
            // style="border: 1px solid #ddd;"
            // onChange={this.loginHandler}
          />
          <input
            name="nickname"
            className="nickname"
            type="text"
            placeholder={nickname ? nickname : "닉네임을 입력하세요"}
            onChange={handleInputValue("nickname")}
            // onChange={this.loginHandler}
          />
          <input
            name="password"
            className="password"
            type="password"
            placeholder="변경할 비밀번호 또는 현재 비밀번호를 입력하세요"
            maxLength="12"
            onChange={handleInputValue("password")}
            // onChange={this.loginHandler}
          />
          <input
            name="password"
            className="repassword"
            type="text"
            placeholder={phone_number ? phone_number : "전화번호를 입력하세요"}
            maxLength="12"
            onChange={handleInputValue("phone_number")}
            // onChange={this.loginHandler}
          />
          <input
            name="password"
            className="repassword"
            type="text"
            placeholder={profile_image ? profile_image : "사진URL을 입력하세요"}
            onChange={handleInputValue("profile_image")}
            // onChange={this.loginHandler}
          />
          <div className="join_div">
            <div
              className="join_btn"
              onClick={() => {
                handleSignup(myinfo);
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
                확인
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
            {/* <div
              className="delete"
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
                회원탈퇴
              </p>
            </div> */}
          </div>
        </li>
      </ul>
    </SignUp_div>
  );
};

export default EditMypage;
