import createError from 'http-errors';
import { ApolloServer } from "apollo-server-express";
import express from 'express';
import mongoose from 'mongoose';
import connectDatabase from './config/dbSetup.js'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from'morgan';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import schema from './models/graphql/schema.js'

connectDatabase();

const apolloServer = new ApolloServer({
  schema,
  playground: true
});

var app = express();

await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



await mongoose.connection.once('connected', function () {
  console.log('Mongoose default connection open to ' + 'mongodb://localhost:27017' + '/' + 'shoppy');
});

await mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

await mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
