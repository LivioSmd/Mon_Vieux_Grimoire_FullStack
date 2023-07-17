const express = require('express');
const apiCtrl = require('../controllers/api');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')
const router = express.Router();


router.post('/books', auth, multer, apiCtrl.createBook);
router.get('/books', apiCtrl.showAllBook);
router.get('/books/:id', apiCtrl.getOneBook);
router.post('/auth/signup', apiCtrl.signup);
router.post('/auth/login', apiCtrl.login);
router.delete('/books/:id', auth, apiCtrl.deleteBook);
router.put('/books/:id', auth, multer, apiCtrl.modifyBook);
router.post('/books/:id/rating', auth, apiCtrl.rating);


module.exports = router;