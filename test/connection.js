const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo')

mongoose.connection.once('open', function(){
    console.log('connection is made');
}).on('error',function(){
    console.log('connection error'.error);
})