const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send("not imple: book instance list");
});

exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`not imple: book instance detail ${req.params.id}`);
});

exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("not imple:bookinstance_create_get");
});

exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("not imple:bookinstance_create_post");
});

exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("not imple:bookinstance_delete_get");
});

exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("not imple:bookinstance_delete_post");
});

exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("not imple:bookinstance_update_get");
});

exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("not imple:bookinstance_update_post");
});
