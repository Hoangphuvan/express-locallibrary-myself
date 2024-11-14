const Autho = require("../models/author");
const asyncHandler = require("express-async-handler");

exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("not implemented: author list");
});

exports.author_detail = asyncHandler(async (req, res, next) => {
  res.send(`Not impl: author detail ${req.params.id}`);
});

exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("not impled: Author create get");
});

exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("not imple: author create post");
});

exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.next("not imple: author delete get");
});

exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("author delete post");
});

exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("not imple: author update get");
});

exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("not imple: author update post");
});
