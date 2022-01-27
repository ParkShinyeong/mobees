const { user } = require('../../models')
const { post } = require('../../models')
const { genre } = require('../../models')
const { comment } = require('../../models')
const { checkAccessToken } = require('../tokenFunctions')

module.exports = async (req, res) => {

  const jwt = checkAccessToken(req)
  if (!jwt) {
    res.status(401).json({ data : null, message : 'Invallid token'})
  }

  const postId = req.params.postid

  if (!postId) {
    res.status(400).json({message:'Bad request'})
  }
  else {
    const all = await post.findAll({
      where : { id : postId },
      include : [
        {
          model : comment,
          attributes : ['id', 'comment', 'createdAt']
        },
        {
          model : user,
          attributes : ['nickname']
        },
        {
          model : genre
        }
      ]
    }).catch(err => console.log(`${err} here`))

    const myPost = all[0]

    // if (!myPost) {
    //   res.status(404).json('Not found')
    // }

    const nickname = all[0].user.nickname
    const allComments = all[0].comments.map((comment) => {
      return {
        id : comment.id,
        nickname : nickname,
        created_at : comment.createdAt,
        comment : comment.comment,
        postId : postId
      }
    })
    const gen = all[0].genres.map(genre => genre.genre)
    const { id, image, total_likes, total_comments, movie_title, movie_date, movie_time, movie_seat } = myPost
    const resData = {
      myMovieInfo: {
        id, 
        image, 
        total_likes, 
        total_comments, 
        genre : gen, 
        movie_title, 
        movie_date, 
        movie_time, 
        movie_seat
      }, 
      comment: allComments
    }
    res.status(200).json({
      data : resData,
      message : 'ok'
    })
  }
};