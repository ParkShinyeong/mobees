import React from "react";
import MyMovieDetails from "../component/MyMovieDetails";
import Comments from "../component/Comments";
import Profile from "../component/Profile";

const MyMovieDetail = ({
  movieDetail,
  setMovieDetail,
  comments,
  setComments,
  postId,
  setPostId,
}) => {
  return (
    <div className="section">
      {/* <Profile></Profile> */}
      <MyMovieDetails movieDetail={movieDetail}></MyMovieDetails>
      <Comments
        movieDetail={movieDetail}
        comments={comments}
        postId={postId}
        setComments={setComments}
        setMovieDetail={setMovieDetail}
      ></Comments>
    </div>
  );
};

export default MyMovieDetail;
