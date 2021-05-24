const express = require('express');
const router = express.Router();
const { igpayAtinlay } = require('../translator');

function asyncHandler(cb) {
    return async(req, res, next) => {
        try {
            await cb(req, res, next)
        } catch(error) {
            next(error);
        }
    }
}

router.get('/', asyncHandler(async(req, res) => {
    res.render('index', { translation: {} });
}));

router.post('/', asyncHandler(async(req, res) => {
    try {
        let textToTranslate = req.body;
        let translatedText = igpayAtinlay(textToTranslate.tobetranslated);
        console.log(translatedText);
        res.redirect('/');
    } catch (error) {
        throw error;
    }
}))

module.exports = router;