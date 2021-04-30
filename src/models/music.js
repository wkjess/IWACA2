const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MusicSchema = new Schema( {

name: { type: String, unique: true},
description: String,
genre: String,
year: String,
continental: String,

});

module.exports = mongoose.model( 'musics', MusicSchema);
