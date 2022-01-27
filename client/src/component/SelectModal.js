import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Genre_div = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;

  > .genremodal {
    width: 480px;
    height: 380px;
    background-color: white;
    position: relative;
    top: 15%;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 8px;
    /* background: #fff; */
    border: 1px solid #8b8585;
    > .close {
      width: 28px;
      height: 28px;
      color: #8b8585;
      float: right;
      font-size: 30px;
      cursor: pointer;
    }
    > .genre_div {
      width: 260px;
      height: 375px;
      box-sizing: border-box;
      margin: 65px auto 0 auto;


      > .submit {
        width: 250px;
        height: 40px;
        border-radius: 3px;
        margin: 35px auto 30px auto;
        background-color: #2b2828;
        cursor: pointer;
        line-height: 40px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
      }
    }
    .checklist {
      width: 200px;
      position:relative;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .genreCheck{
      display: inline-block;
      width: 100px;
    }
  }
`;

const SelectModal = ({ closeSelectModal, setGenres }) => {
  
  const history = useHistory();
  
  const checklist = [false, false, false, false, false, false, false, false];
  const genres = ['코미디', '로맨스', '드라마', '액션', '스릴러', '판타지', 'SF', '호러'];
  const getCheckboxValue = (e) => {
    checklist[e.target.value] = !checklist[e.target.value];
  }
  return (
    <Genre_div>
      <div className="genremodal">
        <div className="close" onClick={(e) => closeSelectModal(e)}>
          &times;
        </div>
        <div className="genre_div">
          <p
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#2b2828",
            }}
          >
            장르를 선택하세요.
          </p>
            <div className = "checklist">
              <div className="genreCheck"><input type="checkbox" name="genre" value="0" onClick={(e)=>{getCheckboxValue(e)}} /> <span>코미디</span></div>
              <div className="genreCheck"><input type="checkbox" name="genre" value="1" onClick={(e)=>{getCheckboxValue(e)}}/> <span>로맨스</span></div>
              <div className="genreCheck"><input type="checkbox" name="genre" value="2" onClick={(e)=>{getCheckboxValue(e)}}/> <span>드라마</span></div>
              <div className="genreCheck"><input type="checkbox" name="genre" value="3" onClick={(e)=>{getCheckboxValue(e)}}/> <span>액션</span></div>
              <div className="genreCheck"><input type="checkbox" name="genre" value="4" onClick={(e)=>{getCheckboxValue(e)}}/> <span>스릴러</span></div>
              <div className="genreCheck"><input type="checkbox" name="genre" value="5" onClick={(e)=>{getCheckboxValue(e)}}/> <span>판타지</span></div>
              <div className="genreCheck"><input type="checkbox" name="genre" value="6" onClick={(e)=>{getCheckboxValue(e)}}/> <span>SF</span></div>
              <div className="genreCheck"><input type="checkbox" name="genre" value="7" onClick={(e)=>{getCheckboxValue(e)}}/> <span>호러</span></div>
            </div>
          <div
            className="submit"
            onClick={() => {
              let result = [];
              checklist.map((el, idx)=>{
                if(el) result.push(genres[idx]);
              })
              setGenres(result);
              closeSelectModal();
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#FCFCFC",
                textAlign: "center",
              }}
            >
              선택완료
            </p>
          </div>
        </div>
      </div>
    </Genre_div>
  );
};

export default SelectModal;
