const express = require('express');
const router = express.Router();
const localstore = require('./localstore');
const s3store = require('./s3store');
router.use('/localstore', localstore);
router.use('/s3store', s3store);


module.exports = router;
