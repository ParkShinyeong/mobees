import React, { useState } from "react";
import logo from "../icon/logo_v1.png";
import profile from "../icon/user_icon.png";
import posting from "../icon/posting_icon.png";
import search from "../icon/search_icon.png";
import up_arrow from "../icon/up_arrow.png";
import down_arrow from "../icon/down_arrow.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../component/Login";

const HeaderWrapper = styled.div`
  .down_arrow {
    opacity: ${ props=> props.dropMenu ? 1 : null }; 
  }
  .login_btn{
    width: 105px;
    height: 40px;
    position: relative;
    top:-10px;
    left: -23px;
    background-color: rgb(0,0,0,0.1);
    border-radius: 100px;
    color:  rgb(0,0,0,0.5);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .login_btn:hover {

    background-color: #ffd900;
    color:#000;
  }
`;
const Dropdown = styled.div`
  width: 180px;
  height: 135px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ddd;
  position: absolute;
  top: 80px;
  right: 0px;
  z-index: 9999;
  color: red;

  div {
    color: rgb(0,0,0,0.6);
    font-size:16px;
    font-weight: 500;
    line-height: 45px;
    text-align:center;
  }
  .dropmenu_menu:hover{
    background-color: rgb(0,0,0,0.05);
    color: rgb(0,0,0,0.8);
    font-weight: 600;
  }
`;

const Header = (props) => {
  let [dropMenu, setdropMenu] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper dropMenu={dropMenu}>
      <div className="header">
        <div className="header_div">
          <div className="header_left">
            <Link to="/">
              <img src={logo} className="app_logo" />
            </Link>
          </div>
          <div className="header_right">
            <div className="search">
              <img src={search} className="search_icon" />
            </div>
            {props.isLogin ? (
              <div className="posting">
                <Link to="/posting">
                  <div
                    onClick={() => {
                      setdropMenu(false);
                    }}
                  >
                    {/* <div className="posting_icon">POST</div> */}
                    <img src={posting} className="posting_icon" />
                  </div>
                </Link>
              </div>
            ) : null}
            {props.isLogin ? (
              <div className="profile_img">
                <div className="profile_img_box" onClick={() => {setdropMenu(!dropMenu);}}>
                  <img src={profile} className="profile_btn" />
                  <img src={down_arrow} className="down_arrow" />
                </div>
                {dropMenu ? 
                  <Dropdown>
                    <div className="dropmenu_box">
                      <div className="dropmenu_content">
                        <Link to="/mymovie" style={{ textDecoration: 'none' }}>
                          <div className="dropmenu_menu"
                            onClick={() => {
                              setdropMenu(!dropMenu);
                            }}
                          >
                            My movie
                          </div>
                        </Link>
                        <Link to="/mypage" style={{ textDecoration: 'none' }}>
                          <div className="dropmenu_menu"
                            onClick={() => {
                              setdropMenu(!dropMenu);
                            }}
                          >
                            My page
                          </div>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                          <div className="dropmenu_menu"
                            onClick={() => {
                              setdropMenu(!dropMenu);
                              props.handleLogout();
                            }}
                          >
                            Log out
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Dropdown> : null
                  }
              </div>
            ) : (
              <div className="login" onClick={(e) => { openModal(e);}}>
                <div className="login_btn">로그인</div>
                {/* <img src={login} className="login_btn" /> */}
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen === true ? (
        <Login
          closeModal={closeModal}
          setIsLogin={props.setIsLogin}
          handleResponseSuccess={props.handleResponseSuccess}
        ></Login>
      ) : null}
    </HeaderWrapper>
  );
};

export default Header;
