const router = require('express').Router();
const db = require('../conexion');
router.get('/add',(req,res)=>{
     res.render('links/add')
});

router.post('/add', async (req,res)=>{
     const {titleLink, url, descripLink} = req.body;
     const mylink = {
          titleLink,
          url,
          descripLink
     };
     
     await db.query('INSERT INTO links set ?',[mylink]); 
     res.send('envio');
     console.log('llego');
     
});


module.exports = router;