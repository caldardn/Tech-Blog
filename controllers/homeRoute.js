const router = require("express").Router();
const { Post, User, Comment } = require("../models");
// const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] }, 
        { model: Comment, attributes: ["username"]}
    ],
    });

    const post = postData.get({ plain: true });
    res.render("post", {
        ...post,
        logged_in: req.session.logged_in,
        
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: User, attributes: ["username"] }],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", {
            posts,
            logged_in: req.session.logged_in,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
    res.render("signup");
});

module.exports = router;
