import React from "react";
import MovieList from "../component/MovieList";
import Profile from "../component/Profile";

const MyMovie = ({ LoginData }) => {
  const myMovie_list = [23, 45, 34, 27, 55, 63, 12, 32];
  return (
    <>
      <div className="section">
        <Profile LoginData={LoginData} myMovie_list={myMovie_list}></Profile>
        <MovieList></MovieList>
      </div>
    </>
  );
};

export default MyMovie;
