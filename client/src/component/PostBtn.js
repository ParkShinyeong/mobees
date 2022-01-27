import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from 'axios';

const PostingBtn = styled.div`
  width: 120px;
  height: 40px;
  background-color: rgb(0,0,0,0.1);
  border-radius: 100px;
  color:  rgb(0,0,0,0.5);
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    background-color: #ffd900;
    color:#000;
  }
`;

const PostBtn = ({imgUrl, title, theater, seat, comment, info, genres}) => {
  
  const history = useHistory();

  const postingMymovie = (key) => {
    const { movie_review, image,  movie_title,  movie_theater,  movie_date,  movie_time,  movie_seat,  movie_genre } = key;
    console.log(key)
    axios
    .post('http://localhost:3001/posts/', 
      {
        movie_review,
        image,
        movie_title,
        movie_theater,
        movie_date,
        movie_time,
        movie_seat,
        movie_genre
      },{
        withCredentials: true
      })
      .then((res) => {
        console.log('res', res.data.data.uploading);
      })
      .catch((err) => {
        alert('포스팅에 실패했습니다.')
      })
  };

  return <PostingBtn className="post" onClick={()=>{
    if(imgUrl === '' || title === '' || theater === '' ||  seat === '' || comment === '' || info === '' || genres.length === 0) alert('입력을 완료해주세요')
    else {
      let obj = { };
      obj.image = imgUrl;
      obj.movie_title = title;
      obj.movie_theater = theater;
      obj.movie_seat = seat;
      obj.movie_review = comment;
      let arr = info.split('T')
      //info: 2021-12-22T00:43
      obj.movie_date =  arr[0];
      obj.movie_time =  arr[1]+':00';
      obj.movie_genre = genres;
    console.log(obj);

    postingMymovie(obj);
      };
    }} >POST</PostingBtn>;
};

export default PostBtn;
