const router = require('express').Router();

router.get('/notes', (req, res)=>{
     res.send('Notes from database');
});
module.exports = router;