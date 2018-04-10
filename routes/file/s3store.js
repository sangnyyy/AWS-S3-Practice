const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath('./config/aws_config.json');


const s3 = new aws.S3();
var upload = multer({
    storage : multerS3({
        s3 : s3,
        bucket : 'smleebucket',
        acl : 'public-read',    //access control list
        key : function(req, file, cb){  //cb = callback
             cb(null, Date.now() + '.' + file.originalname.split('.').pop());
        }
    })
});
router.post('/', upload.array('image',2), function(req, res) {
    res.status(200).send({
        stat:"success",
        data:[req.files[0].location, req.files[1].location]
    });
});

module.exports = router;
