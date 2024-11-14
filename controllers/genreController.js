const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");

exports.genre_list = asyncHandler(async (req, res, next) => {
  res.send("not implemented: genre list");
});

exports.genre_detail = asyncHandler(async (req, res, next) => {
  res.send(`Not impl: genre detail ${req.params.id}`);
});

exports.genre_create_get = asyncHandler(async (req, res, next) => {
  res.send("not impled: genre create get");
});

exports.genre_create_post = asyncHandler(async (req, res, next) => {
  res.send("not imple: genre create post");
});

exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.next("not imple: genre delete get");
});

exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send("genre delete post");
});

exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send("not imple: genre update get");
});

exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send("not imple: genre update post");
});
