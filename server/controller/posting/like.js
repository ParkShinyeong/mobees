const { post } = require('../../models')

module.exports = async(req, res) => {
  console.log("온건가?")
  const postId = req.params.postid

  if (!postId) {
    console.log("안좋아요")
    res.status(400).json({message:'Bad request'})
  }

  if (postId) {
    console.log("좋아요")
    const likedPost = await post.findOne({
      where : {
        id : postId
      }
    }).catch(() => console.log(err))

    if (likedPost) {
        const totalLikes = likedPost.total_likes
        const likeUp = await likedPost.update({ 
          total_likes : likedPost.totalLikes + 1 
        }).catch(() => console.log(err))
        
      res.status(201).json({ 
        data : { likeCount: likeUp.total_likes }, 
        message: 'ok' 
      })
    }
  }
};