const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require ('method-override');
const session = require('express-session');
const morgan = require('morgan');
const flash = require ('connect-flash') 
const MySQLStore = require('express-mysql-session');
const { database } = require('./keys');
// ini
const app = express();
require('././conexion');
//Settings
app.set('port', process.env.PORT || 5500);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs(
     {
          defaultLayout: 'main',
          layoutsDir: path.join(app.get('views'),'layouts'),
          partialsDir: path.join(app.get('views'),'partials') ,
          extname: 'hbs',
          helpers: require('./lib/handlebars')

     }
));

app.set('view engine','hbs');

//Middlewares
app.use(session({
     secret:'mysecretapp',
     resave: false,
     saveUninitialized: false,
     store: new MySQLStore(database) 
}));
app.use(flash()); 
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(methodOverride('_method'));


//Global Variables
app.use((req,res,next)=>{
     app.locals.agregado = req.flash('agregado');
     next();
}); 

// Routes
app.use(require('./routes/index'));
app.use('/links',require('./routes/links'));
app.use(require('./routes/users'));
// Static files

app.use(express.static(path.join(__dirname, 'public')));
// Server is listenning
app.listen(app.get('port'), ()=>{
     console.log('Serve on port', app.get('port'))
})