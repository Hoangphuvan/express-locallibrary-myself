const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstance,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments().exec(),
    BookInstance.countDocuments().exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);
  res.render("index", {
    title: "Local Library Home",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstance,
    author_count: numAuthors,
    genre_count: numGenres,
  });
});

exports.book_list = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  res.render("book_list", { title: "Book List", book_list: allBooks });
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
