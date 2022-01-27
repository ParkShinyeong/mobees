import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import profile from "../icon/user_icon.png";

const Profile_ul = styled.div`
  width: 45%;
  /* height: 80px; */
  /* background-color: darkorange; */
  list-style: none;
  margin: 0 auto;
  position: relative;

  > .profile_image {
    width: 90px;
    height: 90px;
    box-sizing: border-box;
    /* border: 1px solid #8b8585; */
    border-radius: 50px;
    > img {
      width: 90px;
      height: 90px;
    }
  }
  > .profile_list {
    width: 250px;
    height: 90px;
    /* border: 1px solid #8b8585; */
    position: absolute;
    right: 0;
    top: 0;
    /* background-color: darkolivegreen; */

    > ul {
      list-style: none;
      padding-left: 0;
      margin-top: 0;
    }
  }
`;

const Profile = ({ LoginData, myMovie_list }) => {
  const history = useHistory();
  return (
    <div className="profile_div">
      <Profile_ul>
        <div className="profile_image">
          <img src={profile}></img>
        </div>
        <div className="profile_list">
          <ul>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "27px",
                // margin: "8px",
                marginTop: "2px",
              }}
            >
              {LoginData.nickName}
            </li>
            <li
              style={{
                fontWeight: "400",
                fontSize: "14px",
                color: "#8b8585",
                marginTop: "4px",
              }}
            >
              {LoginData.email}
            </li>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "10px",
              }}
            >
              게시글 &nbsp;{myMovie_list.length}
            </li>
          </ul>
        </div>
      </Profile_ul>
    </div>
  );
};

export default Profile;
