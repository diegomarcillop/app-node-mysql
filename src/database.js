const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes/site-bd', {
     useCreateIndex: true,
     useNewUrlParser: true,
     useFindAndModify: false
})
.then(db => console.log('database is connected'))
.catch(err =>{ console.log(err)});