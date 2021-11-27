import createError from 'http-errors';
import { ApolloServer } from "apollo-server-express";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from'morgan';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

// types, query, mutation and subscription
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;

// resolvers
const resolvers = {
  Query: {
    totalPosts: () => 25,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
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
