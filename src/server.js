const path = require('path');
const express = require ('express');
const morgan = require('morgan');
const app = express();

const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
//const dbURI = process.env.DB_HOST || 'mongodb://localhost:2017/IWACA2';
const dbURI = process.env.DB_URL;

module.exports.conn = conn = () => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then((result) => console.log('connected to mongoDB'))
        .catch((err) => console.log(err))
}

mongoose.connect(dbURI, {

    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(()=> console.log('Establishing and connecting to database...'))
    .catch(e => console.log(e));

const indexRoutes = require('./routes/index');

app.set('port' , process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set ('view engine' , 'ejs');

app.use(morgan ('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/' , indexRoutes);

app.listen(app.get ('port'), ()=>{

console.log(`Server on port${app.get('port')}`);

});