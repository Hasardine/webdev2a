const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();


const MongoClient = require('mongodb').MongoClient;


mongoose.connect("mongodb+srv://ben:<keepcool>@cluster0-pjl0b.mongodb.net/node-angular?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log('connected database');
  })
  .catch(() => {
    console.log('connection failed!');
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/exercises", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Exercise added sucessfully'
  });
});


app.get('/api/exercises', (req, res, next) => {
  const exercises = [
    {id: "kjzbc6646",
    title: "First server side exercise",
    content: "edzeferfzf"
  },
    {id: "zeaferf6",
    title: "second server side exercise",
    content: "edzeferfzf"
  }
  ];
  res.status(200).json({
    message: 'Exercises fetch successfully',
    exercises: exercises
  });
});


module.exports = app;
