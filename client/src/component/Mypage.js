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

        > li {
          margin-bottom: 25px;
        }
      }
    }
  }
`;

const Mypage = (props) => {
  return (
    <Mypage_div>
      <ul>
        <li className="mypage_image">
          <img src={profile}></img>
        </li>
        <li className="mypage_list">
          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "27px",
                textAlign: "center",
              }}
            >
              {props.LoginData.nickName}
            </li>
            <li
              style={{
                fontWeight: "500",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              {props.LoginData.email}
            </li>
          </ul>
        </li>
      </ul>
    </Mypage_div>
  );
};

export default Mypage;