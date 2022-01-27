import React from "react";
import styled, { keyframes } from "styled-components";
import loading  from "../icon/loading.png";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingImg = styled.img`
  width: 40px;
  opacity: 1;
  animation: ${rotate} 3s infinite linear;
`;

const Loding = () => {  
  return (
    <div className="loding">
      {/* Loding.. */}
      <LoadingImg src={loading} className="loading"></LoadingImg>
    </div>
  );
};

export default Loding;
