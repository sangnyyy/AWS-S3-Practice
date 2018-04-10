const express = require('express');
const router = express.Router();
const file = require('./file/index');

router.use('/file', file);



// router.post('/', upload.single('image'), function(req, res){
//     res.status(201).send("successful save image file!");
// });

//const multerS3 = require('multer-s3');
//const aws = require('aws-sdk');
//aws.config.loadFromPath('./config/aws_config.json');
//const s3 = new aws.S3();
// const upload = multer({
//     storage : multer({
//         s3 : s3,
//         bucket : "smleebucket",
//         acl : "public-read",    //access control list
//         key : function(req, file, cb){  //cb = callback
//             cb(null, Date.now() + '.' + file.originalname.split('.').pop());
//         }
//     })
// });
// router.post('/', upload.single('image'), function(req, res, next) {
//     res.status(200).send({
//         stat:"success",
//         data : req.files.location
//     });
// });

module.exports = router;
