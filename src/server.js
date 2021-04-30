const path = require('path');
const express = require ('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Anacct:ana@cluster0-mmo49.mongodb.net/test?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(()=> console.log('Establishing and connecting to database...'))
    .catch(e => console.log(e));

const indexRoutes = require('./routes/index');

app.set('port' , process.env.PORT || 3310);
app.set('views', path.join(__dirname, 'views'));
app.set ('view engine' , 'ejs');

app.use(morgan ('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/' , indexRoutes);

app.listen(app.get ('port'), ()=>{

console.log(`Server on port${app.get('port')}`);

});