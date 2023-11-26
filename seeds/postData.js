const {Post} = require('../models');

const postData = [
  {
    post_title: 'Test Post 1',
    post_content: 'This is a test post.',
    user_id: 1
  },
  {
    post_title: 'Test Post 2',
    post_content: 'This is another test post.',
    user_id: 2
  },
  {
    post_title: 'Test Post 3',
    post_content: 'This is a third test post.',
    user_id: 3
  }  
]
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts; 