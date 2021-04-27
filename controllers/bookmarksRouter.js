require('dotenv').config();
const express = require('express');
const bookmarksRouter = express.Router();

const { models, sequelize } = require('../models');

const urlarray = [];
const commentarray = [];
const tagsarray = [];

   sequelize.sync().then(async () => {
   const bookmarks = await models.Bookmark.findAll()
   for(let i=0; i<bookmarks.length; i++) {
    let a = bookmarks[i].dataValues.url;
    let b = bookmarks[i].dataValues.comment;
    let c = bookmarks[i].dataValues.tags;
    urlarray.push(a)
    commentarray.push(b)
    tagsarray.push(c)
    }
   }
   )
    
   


bookmarksRouter.get("/", (req, res) => {
    

    res.render('pages/index', {
        bookmarkUrl: urlarray, 
        bookmarkComment: commentarray,
        bookmarkTags: tagsarray,
    }); 
});





module.exports = bookmarksRouter;