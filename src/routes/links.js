const router = require('express').Router();
const db = require('../conexion');
router.get('/add',(req,res)=>{
     res.render('links/add')
});

router.post('/add',(req,res)=>{
     res.send('Enviado');
});


module.exports = router;