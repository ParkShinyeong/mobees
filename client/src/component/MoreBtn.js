import React, { useState } from "react";
import Loding from "./Loding";
import more from "../icon/plus.png";
import styled from "styled-components";
import axios from "axios";

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

const MoreBtn = ({ list, setList }) => {
  const [loading, setLoading] = useState(false);
  let pageNume = 0;

  const mortMovieList = (num) => {
    num = list.length / 8;

    axios
      .get(`${process.env.REACT_APP_API_URL}/main-movies`, {
        params: {
          page: num,
        },
      })
      .then((movieData) => {
        console.log(movieData);
        setList([...list, ...movieData.data.data.mainMovie]);
      });
  };

  return (
    <MoreBtnBox>
      {loading === false ? (
        <div
          className="more"
          onClick={() => {
            mortMovieList(pageNume);
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
