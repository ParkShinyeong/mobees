import React, { useState } from "react";
import Loding from "./Loding";
import more from "../icon/plus.png";
import styled from "styled-components";

const MoreBtnBox = styled.div`
  /* background-color: aqua; */
  /* position: relative;
  top: -50px; */
  width: 100%;
  height: 100%;
  .more_btn {
    width: 50px;
    opacity: 0.2;
    &:hover {
      opacity: 1;
    }
  }
`;
const MoreBtn = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <MoreBtnBox>
      {loading === false ? (
        <div
          className="more"
          onClick={() => {
            props.setList([...props.list, 0, 0, 0, 0, 0, 0, 0, 0]);
            setLoading(true);
          }}
        >
          <img className="more_btn" src={more} />
        </div>
      ) : (
        <Loding></Loding>
      )}
    </MoreBtnBox>
  );
};

export default MoreBtn;
