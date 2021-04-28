
const express = require("express")
const router = express.Router()

const asyncHandler = require("../util/asyncHandler")
const {requireAuth} = require("../auth")
const {Post} = require("../models")

router.use("/home", asyncHandler(async (req,res) => {
  const posts = await Post.findAll()
  res.render('home', {title: 'breaddit', posts: posts})

  res.render("index.pug", {post})
}))

router.use("/authorized_home", asyncHandler(async (req,res) => {
  res.render("authorized_home")
}))

module.exports = router