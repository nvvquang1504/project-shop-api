exports.getPost = (req, res, next) => {
   res.status(200).json({
      posts: [{
         _id: '1',
         tittle: 'First post',
         content: 'This is the first post',
         imageUrl: 'images/'
      }]
   })
}

exports.createPost = (req, res, next) => {

}