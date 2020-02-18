const express = require('express');
const router = express.Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

let storage = multer.diskStorage({
	destination: './uploads',
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});
const upload = multer({storage: storage});

const controller_page = require('../controller/controller_page');

router.get('/page-list', controller_page.page_list);
router.get('/add-page', controller_page.add_page);
router.post('/add-page', upload.single('page_image'), controller_page.add_page_post);
router.delete('/delete-page:page_id', controller_page.delete_page);
router.get('/edit-page:page_id', controller_page.edit_page);
router.put('/edit-page:page_id',upload.single('page_image'), controller_page.edit_page_put);


module.exports = router;
