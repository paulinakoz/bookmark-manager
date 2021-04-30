require('dotenv').config();
const express = require('express');
const bookmarksRouter = express.Router();

const { models } = require('../models');

bookmarksRouter.get('/', async (req, res) => {
    const bookmarks = await models.Bookmark.findAll();
    
    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    }); 
});

bookmarksRouter.get('/:bookmarkId/edit', async (req, res) => {
    const bookmarks = await models.Bookmark.findOne({
        where: {
            id: req.params.bookmarkId
        }
    });
    
    res.render('bookmarks/edit', {
        bookmarks: bookmarks,
    }); 
});

bookmarksRouter.post('/', async (req, res) => {
    let url = req.body.url
    let comment = req.body.comment
    let tags = req.body.tags

    await models.Bookmark.create({
        url: url, 
        comment: comment, 
        tags: tags
    })

    const bookmarks = await models.Bookmark.findAll();
    
    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    });  
})

bookmarksRouter.delete('/:bookmarkId', async (req, res) => {
    const id = req.params.bookmarkId

    await models.Bookmark.destroy({
        where: {
           id: id
        }
    })

    const bookmarks = await models.Bookmark.findAll();

    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    }); 
})

bookmarksRouter.put('/:bookmarkId', async (req, res) => {
    const id = req.params.bookmarkId

    await models.Bookmark.update(
        {url: req.body.url},
        {where: {
            id: id
        }
    })

    const bookmarks = await models.Bookmark.findAll();

    res.render('bookmarks/index', {
        bookmarks: bookmarks,
    }); 
})






module.exports = bookmarksRouter;