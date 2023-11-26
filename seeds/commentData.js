const {Comment} = require('../models');

const commentData = [
    {
        comment_content: "This is a test comment.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_content: "This is another test comment.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_content: "This is a third test comment.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;