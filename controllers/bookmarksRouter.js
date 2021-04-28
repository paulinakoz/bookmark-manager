require('dotenv').config();
const express = require('express');
const bookmarksRouter = express.Router();

const { models } = require('../models');

bookmarksRouter.get('/', async (req, res) => {
    const bookmarks = await models.Bookmark.findAll();

    const urlarray = [];
    const commentarray = [];
    const tagsarray = [];
    for(let i = 0; i < bookmarks.length; i++) {
        let url = bookmarks[i].dataValues.url;
        let comment = bookmarks[i].dataValues.comment;
        let tag = bookmarks[i].dataValues.tags;

        urlarray.push(url);
        commentarray.push(comment);
        tagsarray.push(tag);
    };
    
    res.render('pages/index', {
        bookmarkUrl: urlarray, 
        bookmarkComment: commentarray,
        bookmarkTags: tagsarray,
    }); 
});

bookmarksRouter.post('add', (req, res) => {

})





module.exports = bookmarksRouter;