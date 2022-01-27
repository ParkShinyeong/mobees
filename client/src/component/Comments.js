import React, { useState } from "react";
import styled from "styled-components";
import otherprofile from "../icon/otheruser_icon.png";
import profile from "../icon/user_icon.png";
import likeAfter from "../icon/likeAfter_icon2.png";
import likeBefore from "../icon/likeBefore_icon.png";
import comment from "../icon/comment.png";

const Comment = styled.div`
  max-width: 650px;
  height: 100%;
  /* background-color: #ddd; */
  margin: 50px auto 100px auto;

  > .like_count{
    display: inline-block;
    width: 50px;
    height: 25px;
    float: left;
    /* background-color: red; */
    padding-right: 6px;
  }
  .likeAfter_icon {
    height: 25px;
  }
  .likeBefore_icon {
    height: 25px;
  }
  .like_countnum {
    display: inline-block;
    width: 20px;
    /* background-color: rgb(0,0,0,0.5); */
    position: relative;
    top:-6px;
    line-height: 25px;
    padding-left: 3px;
    font-size: 18px;
  }

  > .comment_count{
    height: 25px;
    /* background-color: #ddd; */
  }
  .comment_icon {
    height: 25px;
  }
  .comment_countnum {
    display: inline-block;
    width: 20px;
    /* background-color: rgb(0,0,0,0.5); */
    position: relative;
    top:-6px;
    line-height: 25px;
    padding-left: 3px;
    font-size: 18px;
  }
  

    /* background-color: #ddd; */
  
  .otherprofile_img {
    width: 50px;
    margin-top: 35px;
    display: inline-block;
    float: left;
    line-height: 100%;
  }

  > .comment_make {
    width: auto;
    height: 100px;
    margin: 25px auto;
  }

  .comments_txt {
    width : 80%;
    margin-top: 25px;
    margin-left: 40px;
    display: inline-block;
    float: left;
  }

  p {
    margin: 0;
    display: block;
    float: left;
    left: 0;
  }
  p.username{
    width:100%;
    font-weight: 500;
  }
  p.comment{
    width:100%;
    margin-top: 6px;
    line-height: 20px;
    font-weight: 400;
    font-size: 15px;
  }
  p.comment_date{
    width:100%;
    margin-top:6px;
    font-weight: 400;
    font-size: 14px;
    color: rgb(0,0,0,0.5);
  }
  p.line{
    width: 100%;
    height: 1px;
    background-color: rgb(0,0,0,0.1);
    margin-top: 30px;
  }


  .profile_img {
      width: 50px;
      margin-top: 35px;
      display: inline-block;
      float: left;
      line-height: 100%;

    }
  }
  .comment_make {
    width:100%;
    height: 100%;
  }
  .comment_make_txtbox {
    box-sizing: border-box;
    width : 85%;
    height: 150px;
    margin-top: 25px;
    margin-left: 40px;
    padding: 15px;
    display: inline-block;
    float: left;
    border: 1px solid rgb(0,0,0,0.1);
    border-radius: 10px;
    
    > .username {
      color: rgb(0,0,0,0.7);
      font-size: 15px;
    }

    textarea {
      box-sizing: border-box;
      margin-top: 10px;
      width: 100%; 
      height: 80%;
      border: 1px solid rgb(0,0,0,0);
	    outline:0;
    }
    textarea::placeholder {
      color: rgb(0,0,0,0.5);
    }
  }
  
  .button_box {
    box-sizing: border-box;
    width: 100%;
    height:30px;
    display: inline-block;
    position: relative;
    padding-top: 15px;
    padding-right: 10px;
  }
  .button_box >div {
    display: inline-block;
    margin-left: 8px;
    float: right;
    width: 60px;
    height: 30px;
    background-color: rgb(0,0,0,0.1);
    border-radius: 100px;
    color:  rgb(0,0,0,0.5);
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  .button_box >div.button_cancel:hover {
    background-color: rgb(0,0,0,0.15);
  }
  .button_box >div.button_submit:hover {
    background-color: #ffd900;
    color:#000;
  } 
`;

const Comments = () => {
  const comment_list = [
    {
      username: "zzok3312",
      comment:
        "마지막 회상신에서 처음과 달리 키스신으로 스토리시작될때 진짜 소리지를 뻔...",
      comment_date: "2022.01.28",
      img: otherprofile,
    },
    {
      username: "ez0ez0",
      comment: "인생영화입니다",
      comment_date: "2022.01.28",
      img: otherprofile,
    },
  ];
  let [like_countnum, setLike_countnum] = useState(0);
  let [comment_countnum, setComment_countnum] = useState(2);
  let [list, setList] = useState(comment_list);
  let [value, setValue] = useState("");

  return (
    <Comment>
      <div className="like_count">
        {like_countnum ? (
          <img
            src={likeAfter}
            className="likeAfter_icon"
            onClick={() => {
              setLike_countnum(like_countnum + 1);
            }}
          />
        ) : (
          <img
            src={likeBefore}
            className="likeAfter_icon"
            onClick={() => {
              setLike_countnum(like_countnum + 1);
            }}
          />
        )}
        <span className="like_countnum">{like_countnum}</span>
      </div>

      <div className="comment_count">
        <img src={comment} className="comment_icon" />
        <span className="comment_countnum">{comment_countnum}</span>
      </div>

      {list.map((el, idx) => {
        return (
          <div className="comments" key={idx}>
            <img src={el.img} className="otherprofile_img" />
            <div className="comments_txt">
              <p className="username">{el.username}</p>
              <p className="comment">{el.comment}</p>
              <p className="comment_date">{el.comment_date}</p>
            </div>
            <p className="line"></p>
          </div>
        );
      })}

      <div className="comment_make">
        <div className="comments">
          <img src={profile} className="profile_img" />
          <div className="comment_make_txtbox">
            <p className="username">Mobees_username</p>
            <textarea
              id="comment_writing"
              maxLength={180}
              placeholder="댓글을 작성해주세요"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            ></textarea>
          </div>
          <div className="button_box">
            <div
              className="button_submit"
              onClick={() => {
                let obj = {};
                obj.username = "Mobees_username";
                obj.comment = value;
                if (new Date().getMonth() > 9)
                  obj.comment_date = `${new Date().getFullYear()}-${
                    new Date().getMonth() + 1
                  }-${new Date().getDate()}`;
                else
                  obj.comment_date = `${new Date().getFullYear()}-0${
                    new Date().getMonth() + 1
                  }-${new Date().getDate()}`;
                obj.img = profile;
                if (obj.comment !== "") {
                  setList([...list, obj]);
                  setValue("");
                  setComment_countnum(comment_countnum + 1);
                }
              }}
            >
              완 료
            </div>
            <div
              className="button_cancel"
              onClick={() => {
                setValue("");
              }}
            >
              취 소
            </div>
          </div>
        </div>
      </div>
    </Comment>
  );
};

export default Comments;
