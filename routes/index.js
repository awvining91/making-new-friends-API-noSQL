//This cool code imports the needed routes for APIs


const router = require('express').Router();

const apiRoutes  = require ('./api');
// This adds a prefix to all the routes ^

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h2> Oh no! 404 Error detected!!!</h2>');
});

module.exports = router;
