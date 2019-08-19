const router = require('express').Router();
const db = require('../conexion');
router.get('/add',(req,res)=>{
     res.render('links/add')
});

router.get('/', async (req, res)=>{
     const links = await db.query('SELECT * FROM links');
     res.render('links/list',{links})
});

router.get('/delete/:idLink', async (req, res) => {
     const { idLink } = req.params;
     await db.query('DELETE FROM links WHERE idLink = ?', [idLink]);
     res.redirect('/links');
});
 
router.post('/add', async (req,res)=>{
     const {titleLink, url, descripLink} = req.body;
     const mylink = {
          titleLink,
          url,
          descripLink
     };
     await db.query('INSERT INTO links set ?',[mylink]); 
     res.redirect('/links')
});

/* router.post('/', async (req, res)=> {
     const links = await db.query('SELECT * FROM links');
     console.log(links) 
});
*/

module.exports = router;