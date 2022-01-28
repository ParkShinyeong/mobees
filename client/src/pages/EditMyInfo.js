import React from "react";
import EditMypage from "../component/EditMypage";

const EditMyInfo = ({ userinfo, setUserinfo, loading, setLoading }) => {
  return (
    <EditMypage
      userinfo={userinfo}
      setUserinfo={setUserinfo}
      loading={loading}
      setLoading={setLoading}
    ></EditMypage>
  );
};

export default EditMyInfo;
