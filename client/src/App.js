import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";
import MainMovieDetail from "./pages/MainMovieDetail";
import MyMovie from "./pages/MyMovie";
import MyMovieDetail from "./pages/MyMovieDetail";
import MyPage from "./pages/MyPage";
import Posting from "./pages/Posting";
import SignUp from "./pages/SignUp";
import EditMyInfo from "./pages/EditMyInfo";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";

// const LoginData = {
//   email: "YeongYangJae@gmail.com",
//   nickName: "0_Yang_Jae",
//   password: "1234",
// };

function App() {
  const history = useHistory();

  let [isLogin, setIsLogin] = useState(false);
  let [userinfo, setUserinfo] = useState(null);
  let [jy, setJy] = useState("what");

  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState(0);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieList, setMovieList] = useState([]);
  const [gerne, setGerne] = useState("");
  const [list, setList] = useState([]);

  const isAuthenticated = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/info`, {
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
        setJy("지영");
        console.log(userinfo, jy);
      })
      .then((res) => {
        setIsLogin(true);
      })
      .catch((err) => {
        setIsLogin(false);
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/logout`).then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push("/");
    });
  };

  //리로딩시 로그인이 풀리지 않도록함.
  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div className="App">
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        handleResponseSuccess={handleResponseSuccess}
        handleLogout={handleLogout}
        jy={jy}
      ></Header>
      <Switch>
        <Route exact path="/">
          <Main
            comments={comments}
            setComments={setComments}
            movieList={movieList}
            setMovieList={setMovieList}
            movieDetail={movieDetail}
            setMovieDetail={setMovieDetail}
            postId={postId}
            setPostId={setPostId}
            gerne={gerne}
            setGerne={setGerne}
            list={list}
            setList={setList}
          ></Main>
        </Route>
        <Route path="/detail">
          <MainMovieDetail
            comments={comments}
            setComments={setComments}
            movieDetail={movieDetail}
            postId={postId}
            setMovieDetail={setMovieDetail}
          ></MainMovieDetail>
        </Route>
        <Route path="/mymovie">
          <MyMovie
            comments={comments}
            setMovieDetail={setMovieDetail}
            movieDetail={movieDetail}
            setComments={setComments}
            postId={postId}
            setPostId={setPostId}
            list={list}
            userinfo={userinfo}
          ></MyMovie>
        </Route>
        <Route path="/mymoviedetail">
          <MyMovieDetail
            comments={comments}
            setComments={setComments}
            movieDetail={movieDetail}
            postId={postId}
            setPostId={setPostId}
            setMovieDetail={setMovieDetail}
          ></MyMovieDetail>
        </Route>
        <Route path="/mypage">
          <MyPage userinfo={userinfo} jy={jy}></MyPage>
        </Route>
        <Route path="/posting">
          <Posting></Posting>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/editmyinfo">
          <EditMyInfo userinfo={userinfo}></EditMyInfo>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
