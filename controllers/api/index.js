const router = require('express').Router();
const userRoutes = require('./usersRoute');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
