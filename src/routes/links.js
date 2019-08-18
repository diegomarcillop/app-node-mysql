const router = require('express').Router();
const db = require('../conexion');
router.get('/add',(req,res)=>{
     res.render('links/add')
});

module.exports = router;