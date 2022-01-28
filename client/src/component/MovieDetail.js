import React from "react";
import styled from "styled-components";
import borCode from "../icon/barcode_icon.png";
import axios from "axios";

const MovieDetail_ul = styled.ul`
  max-width: 700px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  box-sizing: border-box;
  grid-gap: 20px;
  list-style: none;
  > li {
    width: 350px;
    box-shadow: 2px 3px 3px 2px #ddd;
    min-height: 500px;
    border: 1px solid #fff;
    border-radius: 10px;
  }
`;

const Movie_list_post_image = styled.div`
  width: auto;
  height: 480px;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  /* border: 1px solid #ddd; */
  position: relative;
  /* background-color: darkred; */
  /* transform: scale(0, -1); */
  > img {
    width: 329px;
    height: 480px;
    border-radius: 10px;
  }
`;

const Movie_info = styled.div`
  width: auto;
  min-height: 480px;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  position: relative;
  /* background-color: darkred; */
  /* transform: scale(0, -1); */
  .post_list {
    width: 100%;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    > .title {
      width: 100%;
      height: 55px;
      margin: 20px auto 40px;
      /* background-color: darkorchid; */
      font-size: 23px;
      line-height: 1.2;
      text-align: center;
      font-weight: bold;
      color: rgb(23, 23, 23);
    }
    > .review {
      width: 100%;
      height: 75px;
      /* background-color: darkslategrey; */
      font-size: 17px;
      line-height: 1.5;
      text-align: center;
      font-weight: 600;
      margin: 25px auto 10px auto;
      color: #2b2828;
    }
    > .gernelist {
      width: 75%;
      height: 39px;
      /* background-color: firebrick; */
      margin: 0 auto 20px auto;
      font-size: 15px;
      text-align: center;
      font-weight: 600;
      color: #8b8585;
    }
    > .movie_div {
      width: 75%;
      /* background-color: lavenderblush; */
      margin: 40px auto 8px auto;
      position: relative;
      > .theater {
        width: 60%;
        /* background-color: gray; */
        font-size: 14px;
        text-align: center;
      }
      > .seat {
        width: 40%;
        font-size: 14px;
        text-align: center;
        /* background-color: hotpink; */
        margin: 0 auto;
        right: 0;
        position: absolute;
        border-left: 2px solid #2b2828;
        bottom: 0;
      }
    }
    > .dateTime {
      width: 100%;
      /* background-color: darkslategrey; */
      text-align: center;
      margin: 0 auto;
      font-size: 16px;
      color: #8b8585;
    }
  }
`;

const MovieDetail = ({ movieDetail, setMovieDetail }) => {
  return (
    <MovieDetail_ul>
      <li>
        <Movie_list_post_image>
          <img src={movieDetail.image}></img>
        </Movie_list_post_image>
      </li>
      <li>
        <Movie_info>
          <div className="post_list">
            <div className="title">{movieDetail.movie_title}</div>
            <div className="review">{movieDetail.movie_review}</div>
            {/* <div className="gernelist">#액션&nbsp;#SF</div> */}
            {/* <div className="movie_div">
              <div className="theater">cgv 일산</div>
              <div className="seat">H14열</div>
            </div> */}

            {/* <div className="dateTime">2022. 01. 28 오후 02:00</div> */}
            <div
              className="barcode"
              style={{
                width: "180px",
                height: "48px",
                margin: "45px auto",
              }}
            >
              <img
                src={borCode}
                style={{
                  width: "180px",
                  height: "48px",
                }}
              ></img>
            </div>
          </div>
        </Movie_info>
      </li>
    </MovieDetail_ul>
  );
};

export default MovieDetail;
