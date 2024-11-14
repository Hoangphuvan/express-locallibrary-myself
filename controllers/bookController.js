const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.book_list = asyncHandler(async (req, res, next) => {
  res.send("not implemented: book list");
});

exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`Not impl: book detail ${req.params.id}`);
});

exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send("not impled: book create get");
});

exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send("not imple: book create post");
});

exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.next("not imple: book delete get");
});

exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send("book delete post");
});

exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send("not imple: book update get");
});

exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send("not imple: book update post");
});
