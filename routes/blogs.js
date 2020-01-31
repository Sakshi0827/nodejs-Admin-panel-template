const express = require('express');
const router = express.Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');


let storage = multer.diskStorage({
	destination: './uploads',
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});
const upload = multer({storage: storage});

const controller_blogs = require('../controller/controller_blogs');

router.get('/blogs-list', controller_blogs.blogs_list);
router.get('/blogs-category', controller_blogs.blogs_category);
router.get('/add-blogs', controller_blogs.add_blogs);
router.get('/add-blogs-category', controller_blogs.add_blogs_category);
router.post('/add-blogs-category', controller_blogs.add_blogs_category_post);
router.post('/add-blogs', upload.single('blogs_image'), controller_blogs.add_blogs_post);
router.delete('/delete-blogs:blogs_id', controller_blogs.delete_blogs);
router.delete('/delete-blog-category:blogs_category_id', controller_blogs.delete_blogs_category);

module.exports = router;
