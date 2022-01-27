import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";
import MainMovieDetail from "./pages/MainMovieDetail";
import MyMovie from "./pages/MyMovie";
import MyMovieDetail from "./pages/MyMovieDetail";
import MyPage from "./pages/MyPage";
import Posting from "./pages/Posting";
import SignUp from "./pages/SignUp";
import { Link, Route, Switch, useHistory } from "react-router-dom";

const LoginData = {
  email: "YeongYangJae@gmail.com",
  nickName: "0_Yang_Jae",
  password: "1234",
};

function App() {
  let [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const [selectContent, setSelectContent] = useState({
    id: "",
    image: "",
    total_like: "",
    total_comments: "",
    movie_title: "",
    movie_review: "",
  });
  const [comments, setComments] = useState({
    id: "",
    nickname: "",
    created_at: "",
    comment: "",
    postId: "",
  });

  const [movieDetail, setMovieDetail] = useState({});
  const [movieList, setMovieList] = useState([]);

  return (
    <div className="App">
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        LoginData={LoginData}
      ></Header>
      <Switch>
        <Route exact path="/">
          <Main
            selectContent={selectContent}
            setSelectContent={setSelectContent}
            comments={comments}
            setComments={setComments}
            movieList={movieList}
            setMovieList={setMovieList}
            movieDetail={movieDetail}
            setMovieDetail={setMovieDetail}
          ></Main>
        </Route>
        <Route path="/detail">
          <MainMovieDetail
            selectContent={selectContent}
            setSelectContent={setSelectContent}
            comments={comments}
            setComments={setComments}
            movieDetail={movieDetail}
            setMovieDetail={setMovieDetail}
          ></MainMovieDetail>
        </Route>
        <Route path="/mymovie">
          <MyMovie LoginData={LoginData}></MyMovie>
        </Route>
        <Route path="/mymoviedetail">
          <MyMovieDetail
            selectContent={selectContent}
            setSelectContent={setSelectContent}
            comments={comments}
            setComments={setComments}
          ></MyMovieDetail>
        </Route>
        <Route path="/mypage">
          <MyPage LoginData={LoginData}></MyPage>
        </Route>
        <Route path="/posting">
          <Posting></Posting>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
