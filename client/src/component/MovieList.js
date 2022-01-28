import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import MoreBtn from "./MoreBtn";
import like from "../icon/likeAfter_icon2.png";
import axios from "axios";

const Movie_list_ul = styled.ul`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 5px;
  box-sizing: border-box;
  grid-gap: 20px;

  /* background-color: aqua; */
  list-style: none;

  > li {
    width: auto;
    box-shadow: 2px 3px 4px 2px #ddd;
    min-height: 350px;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 25px;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Movie_list_image = styled.div`
  width: 216px;
  height: 310px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  box-sizing: border-box;
  /* border: 1px solid #ddd; */
  /* background-color: aquamarine; */
  > img {
    width: 100%;
    height: 310px;
    border-radius: 10px;
  }
  /* transform: scale(0, -1); */
`;
const Movie_like = styled.div`
  width: 19%;
  min-height: 24px;
  float: right;
  cursor: pointer;
  margin: 10px;
  margin-top: 0;
  box-sizing: border-box;
  /* transform: scale(0, -1); */
  > ul {
    width: 100%;
    height: 100%;
    margin-top: 4px;
    list-style: none;
    padding-left: 0;

    > .like_image {
      width: 15px;
      height: 15px;
    }
    > .like_count {
      width: 50%;
      height: 15px;
      float: right;
      line-height: 15px;
      margin-right: 2px;
      text-align: right;
      font-size: 15px;
      font-weight: 500;
      /* background-color: #fdf; */
    }
  }
`;

const MovieList = ({
  movieDetail,
  setMovieDetail,
  comments,
  setComments,
  postId,
  setPostId,
}) => {
  // const movie_list = [23, 45, 34, 27, 55, 63, 12, 32];
  const history = useHistory();
  const [list, Setlist] = useState([]);

  const movieList = () => {
    axios
      .get(
        // `${process.env.REACT_APP_API_URL}/main-movies`
        "http://ec2-13-125-214-152.ap-northeast-2.compute.amazonaws.com/main-movies"
      )
      .then((movieData) => {
        // console.log(movieData.data.data.mainMovie);
        Setlist(movieData.data.data.mainMovie);
        // console.log(list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    movieList();
  }, []);

  const detail = (postid) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/main-movies/view/${postid}`)
      .then((movieData) => {
        setMovieDetail(movieData.data.data.mainMovieView);
        setComments(movieData.data.data.comment);
        setPostId(postid);
        console.log(movieData.data.data.comment);
      });
  };

  return (
    <>
      <Movie_list_ul>
        {list.map((el, idx) => (
          <li
            key={idx}
            onClick={() => {
              detail(el.id);
              console.log(postId);
              history.push("/detail");
            }}
          >
            <Movie_list_image>
              <img src={el.image}></img>
            </Movie_list_image>
            <Movie_like>
              <ul>
                <img className="like_image" src={like}></img>
                <li className="like_count">{el.total_likes}</li>
              </ul>
            </Movie_like>
          </li>
        ))}
      </Movie_list_ul>
      <MoreBtn list={list} setList={Setlist}></MoreBtn>
    </>
  );
};

export default MovieList;
