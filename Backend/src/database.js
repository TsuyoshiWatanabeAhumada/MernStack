const mongoose = require('mongoose');


const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetestTW';

mongoose.connect(URI, {
    //userNewUrlParser: true,
    //useCreateIndex: true
    //userFindAndModifi: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});
