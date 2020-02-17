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

const controller_slider = require('../controller/controller_slider');

router.get('/slider-list', controller_slider.slider_list);
router.get('/add-slider', controller_slider.add_slider);
router.post('/add-slider', upload.single('slider_image'), controller_slider.add_slider_post);
router.delete('/delete-slider:slider_id', controller_slider.delete_slider);
router.get('/edit-slider:slider_id', controller_slider.edit_slider);
router.put('/edit-slider:slider_id', upload.single('slider_image'), controller_slider.edit_slider_put);


module.exports = router;