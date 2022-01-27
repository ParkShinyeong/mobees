import React from "react";
import Mypage from "../component/Mypage";

const MyPage = ({ userinfo , jy}) => {
  return (
    <div className="section">
      <Mypage userinfo={userinfo} jy={jy}></Mypage>
    </div>
  );
};

export default MyPage;
