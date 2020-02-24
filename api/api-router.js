const router = require('express').Router();

router.use('/auth');
router.use('/users');

router.get('/', (req, res) => {
    res.send('API is running');
})

module.exports = router;