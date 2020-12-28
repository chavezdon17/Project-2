const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html');
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"></link>

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
