require('dotenv').config();
const express = require('express');
const bookmarksRouter = express.Router();

const { models, sequelize } = require('../models');

const bookmarks;

bookmarksRouter.get("/", (req, res) => {
    bookmarks.forEach((book) => {
        let bookmarkUrl = book.bookmark.dataValues.url;
        let bookmarkComment = book.bookmark.dataValues.comment;
        let bookmarkTags = book.bookmark.dataValues.tags;

        return bookmarkUrl, bookmarkComment, bookmarkTags;
    });

    res.render('pages/index', {
        bookmarkUrl: bookmarkUrl, 
        bookmarkComment: bookmarkComment,
        bookmarkTags: bookmarkTags,
    }); 
});


sequelize.sync().then(async () => {
    bookmarks = await models.Bookmark.findAll()

    console.log(bookmarks);
});


module.exports = bookmarksRouter;