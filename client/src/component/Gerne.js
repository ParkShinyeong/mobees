import React, { useState } from "react";
import prev from "../icon/prev_icon.png";
import next from "../icon/next_icon.png";
import styled, { keyframes } from "styled-components";

const GerneList = styled.div`
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 1024px;
  overflow: hidden;
  /* background-color: aquamarine; */

  .gerne_slide {
    display: inline-block;
    width: 30px;
    height: 100%;
    cursor: pointer;
  }
  .prev {
    position: relative;
    float: left;
    z-index: 100;
    background-color: white;
  }
  .next {
    position: relative;
    float: right;
    z-index: 100;
    background-color: white;
  }
  .prev_icon {
    width: 16px;
    /* padding: 12px 0; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: brown; */
  }
  .next_icon {
    width: 16px;
    /* padding: 12px 0; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: brown; */
  }
`;

const slider = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10%);
  }
`;
const Slides = styled.ul`
  margin: 0;
  /* padding: 0; */
  width: 1440px;
  height: 40px;
  padding-left: 0;
  display: flex;
  /* background-color: rgba(255, 10, 10); */
  position: absolute;
  /* animation: ${slider} 2s infinite; */
  /* left: ${(props) => props.isMove}px; */
  transform: translateX(${(props) => props.isMove}px);
  transition: transform ease-out 1s;
  > li:nth-child(${(props) => props.isOn}) {
    color: rgb(0, 0, 0, 1);
    font-weight: 600;
  }
`;
const Slidebtn = styled.li`
  /* margin-right: 40px; */
  list-style: none;
  width: 118px;
  text-align: center;
  line-height: 40px;
  height: 38px;
  border-radius: 5px;
  display: inline-block;
  margin: auto 30px;
  white-space: nowrap;
  font-size: 18px;
  font-weight: bold;
  color: rgb(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    color: rgb(0, 0, 0, 1);
    font-weight: 600;
  }
`;

const Gerne = () => {
  let [isMove, setMove] = useState(40);
  let [isOn, setIsOn] = useState(1);
  // const style = {
  //   left: isMove +'px'
  //   // transform: translateX(isMove)
  // }

  return (
    <div className="gerne ">
      <GerneList>
        <div
          className="gerne_slide prev"
          onClick={() => {
            if (isMove >= 40) setMove(40);
            else setMove(isMove + 160);
          }}
        >
          <img src={prev} className="prev_icon" />
        </div>
        <Slides isOn={isOn} isMove={isMove}>
          <Slidebtn
            onClick={() => {
              setIsOn(1);
            }}
          >
            Total
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(2);
            }}
          >
            코미디
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(3);
            }}
          >
            로맨스
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(4);
            }}
          >
            드라마
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(5);
            }}
          >
            액션
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(6);
            }}
          >
            스릴러
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(7);
            }}
          >
            판타지
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(8);
            }}
          >
            SF
          </Slidebtn>
          <Slidebtn
            onClick={() => {
              setIsOn(9);
            }}
          >
            호러
          </Slidebtn>
        </Slides>
        <div
          className="gerne_slide next"
          onClick={() => {
            if (isMove <= -440) setMove(-440);
            else setMove(isMove - 160);
          }}
        >
          <img src={next} className="next_icon" />
        </div>
      </GerneList>
    </div>
  );
};

export default Gerne;