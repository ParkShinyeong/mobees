import React from "react";
import MyMovieList from "../component/MyMovieList";
import Profile from "../component/Profile";

const MyMovie = ({
  LoginData,
  comments,
  setMovieDetail,
  movieDetail,
  setComments,
  postId,
  setPostId,
  list,
  userinfo,
}) => {
  const myMovie_list = [23, 45, 34, 27, 55, 63, 12, 32];
  return (
    <>
      <div className="section">
        <Profile
          userinfo={userinfo}
          list={list}
          myMovie_list={myMovie_list}
        ></Profile>
        <MyMovieList
          comments={comments}
          setMovieDetail={setMovieDetail}
          movieDetail={movieDetail}
          setComments={setComments}
          postId={postId}
          setPostId={setPostId}
        ></MyMovieList>
      </div>
    </>
  );
};

export default MyMovie;
