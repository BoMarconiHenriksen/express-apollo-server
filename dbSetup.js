import mongoose from 'mongoose';
var connectionString;
var databaseName = 'ShopDb'

function connect() {
 connectionString = 'mongodb://localhost:27017'

 // Returns a promise
 return mongoose.connect(connectionString, {
      dbName: databaseName,
      useNewUrlParser: true,
      autoIndex: true,
      useUnifiedTopology: true,
    }
 ); 
};

await mongoose.connection.once('connected', function () {
  console.log('Mongoose default connection open to ' + connectionString + '/' + databaseName);
});

await mongoose.connection.once('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

export default connect;
