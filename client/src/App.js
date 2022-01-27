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
import axios from "axios";

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

  const isAuthenticated = () => {
    axios
      .get("http://localhost:3001/users/info", {
        withCredentials: true,
      })
      .then((res) => {
        const {
          user_name,
          nickname,
          email,
          profile_image,
          phone_number,
          birthday,
        } = res.data.data.userInfo;
        setUserinfo({
          user_name,
          nickname,
          email,
          profile_image,
          phone_number,
          birthday,
        });
      })
      .then((res) => {
        console.log(userinfo);
        setIsLogin(true);
      })
      .catch((err) => err);
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post("http://localhost:3001/signout").then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      // history.push('/');
    });
  };

  return (
    <div className="App">
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        LoginData={LoginData}
        handleResponseSuccess={handleResponseSuccess}
      ></Header>
      <Switch>
        <Route exact path="/">
          <Main
            selectContent={selectContent}
            setSelectContent={setSelectContent}
            comments={comments}
            setComments={setComments}
          ></Main>
        </Route>
        <Route path="/detail">
          <MainMovieDetail
            selectContent={selectContent}
            setSelectContent={setSelectContent}
            comments={comments}
            setComments={setComments}
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
