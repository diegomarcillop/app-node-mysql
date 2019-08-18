const router = require('express').Router();

router.get('/links', (req, res)=>{
     res.send('Notes from database');
});
module.exports = router;