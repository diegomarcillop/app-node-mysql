const router = require('express').Router();

// create routes
router.get('/',(req,res)=>{
     res.send('Hola desde res');
})

router.get('/about', (req,res)=>{
     res.send('<h2>About</h2>')
})
module.exports = router;