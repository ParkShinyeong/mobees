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
  postId,
  setPostId,
  gerne,
  setGerne,
  list,
  setList,
}) => {
  return (
    <>
      <div className="section">
        <Gerne
          gerne={gerne}
          setGerne={setGerne}
          list={list}
          setList={setList}
        ></Gerne>
        <MovieList
          selectContent={selectContent}
          setSelectContent={setSelectContent}
          comments={comments}
          setComments={setComments}
          movieDetail={movieDetail}
          setMovieDetail={setMovieDetail}
          postId={postId}
          setPostId={setPostId}
          gerne={gerne}
          setGerne={setGerne}
          list={list}
          setList={setList}
        ></MovieList>
      </div>
    </>
  );
};

export default Main;
