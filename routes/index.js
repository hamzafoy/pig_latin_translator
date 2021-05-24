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
    res.render('index');
}));

router.post('/', asyncHandler(async(req, res) => {
    try {
        let textToTranslate = req.body.tobetranslated;
        console.log(textToTranslate);
        let translatedText = igpayAtinlay(textToTranslate);
        console.log(translatedText);
        res.render('index', { translation: translatedText})
    } catch (error) {
        throw error;
    }
}))

module.exports = router;