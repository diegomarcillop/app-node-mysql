const router = require('express').Router();

router.get('/users/sigin',(req, res)=>{
     res.send('Ingresando a la app');
});

router.get('/users/sigup',(req,res)=>{
     res.send('Formulario de autotenticación ')
});
module.exports = router;