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

router.get('/edit/:idLink', async (req, res)=>{
     const {idLink} = req.params;
     const link = await db.query('SELECT * FROM links WHERE idLink = ?', [idLink]);
     console.log(link[0]);
     res.render('links/edit',{link: link[0]})
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

router.post('/edit/:idLink', async (req, res)=>{
     const { idLink } = req.params;
     const { titleLink, descripLink, url} = req.body;
     const link = {
          titleLink,
          descripLink,
          url
     }
     await db.query('UPDATE links set ? WHERE idLink = ?', [link, idLink])
     res.redirect('/links')
});


module.exports = router;