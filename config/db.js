const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/e-commerce',{useNewUrlParser : true});
mongoose.set('useCreateIndex',true);

module.exports = mongoose;