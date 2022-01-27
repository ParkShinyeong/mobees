import React from "react";
import Gerne from "../component/Gerne";
import MovieList from "../component/MovieList";
const Main = ({
  selectContent,
  setSelectContent,
  comments,
  setComments,
  movieList,
  setMovieList,
  movieDetail,
  setMovieDetail,
}) => {
  return (
    <>
      <div className="section">
        <Gerne></Gerne>
        <MovieList
          selectContent={selectContent}
          setSelectContent={setSelectContent}
          comments={comments}
          setComments={setComments}
          movieDetail={movieDetail}
          setMovieDetail={setMovieDetail}
        ></MovieList>
      </div>
    </>
  );
};

export default Main;
