import React from "react";
import MovieDetail from "../component/MovieDetail";
import Comments from "../component/Comments";

const MainMovieDetail = ({
  movieDetail,
  comments,
  postId,
  setComments,
  setMovieDetail,
}) => {
  return (
    <div className="section">
      <MovieDetail movieDetail={movieDetail}></MovieDetail>
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

export default MainMovieDetail;
