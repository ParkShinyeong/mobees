import React from "react";
import styled from "styled-components";
import profile from "../icon/user_icon.png";

const Mypage_div = styled.div`
  width: 500px;
  height: 600px;
  margin: 52px auto;
  position: relative;
  box-sizing: border-box;
  > ul {
    width: 500px;
    height: 500px;
    list-style: none;
    padding-left: 0;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    border: 1px solid #8b8585;
    > .mypage_image {
      width: 120px;
      height: 120px;
      border-radius: 100px;
      /* border: 1px solid #8b8585; */
      margin: 120px auto 40px auto;
      > img {
        width: 120px;
        height: 120px;
      }
    }
    > .mypage_list {
      width: 250px;
      height: 85px;
      margin: 50px auto;

      > ul {
        list-style: none;
        padding-left: 0;
        text-align: center;

        > li.nickname {
          margin-bottom: 25px;
        }
        li.userinfo_list {
          font-weight: 500;
          font-size: 18px;
          margin-bottom: 10px;
          text-align: center;
        }
      }
    }
  }
`;

const Mypage = ({ userinfo, jy }) => {
  console.log(userinfo, jy);
  return (
    <Mypage_div>
      <ul>
        <li className="mypage_image">
          {userinfo.profile_image ? (
            <img src={userinfo.profile_image}></img>
          ) : (
            <img src={profile}></img>
          )}
        </li>
        <li className="mypage_list">
          <ul>
            <li
              className="nickname"
              style={{
                fontWeight: "bold",
                fontSize: "27px",
                textAlign: "center",
              }}
            >
              {userinfo.nickname}
            </li>
            {userinfo.user_name ? (
              <li className="userinfo_list">이름 : {userinfo.user_name}</li>
            ) : null}
            {userinfo.email ? (
              <li className="userinfo_list">이메일 : {userinfo.email}</li>
            ) : null}
            {userinfo.phone_number ? (
              <li className="userinfo_list">
                핸드폰 : {userinfo.phone_number}
              </li>
            ) : null}
            {userinfo.birthday ? (
              <li className="userinfo_list">생일 : {userinfo.birthday}</li>
            ) : null}
          </ul>
        </li>
      </ul>
    </Mypage_div>
  );
};

export default Mypage;
