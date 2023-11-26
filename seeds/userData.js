const {User} = require('../models');

const userData = [
    {
        username: 'testuser1',
        password: 'password1'
    },
    {
        username: 'testuser2',
        password: 'password2'
    },
    {
        username: 'testuser3',
        password: 'password3'
    }
]
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;