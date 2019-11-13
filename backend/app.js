const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();


const MongoClient = require('mongodb').MongoClient;

'mongodb+srv://user1:1234@cluster0-g03ww.mongodb.net/assignment1?retryWrites=true&w=majority'
mongoose.connect("mongodb+srv://ben:keepcool@cluster0-pjl0b.mongodb.net/node-angular?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => {
    console.log('connected database');
  })
  .catch((err) => {
    console.log('connection failed! ' + JSON.stringify(err));
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/exercises", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdExercise => {
    res.status(201).json({
      message: "post added!",
      exerciseId: createdExercise._id
    });
  });
});

app.put('/api/exercises/:id', (req, res, next) => {
  const exercise = new Exercise ({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Exercise.updateOne({_id: req.params.id}, exercise).then(result => {
    console.log(result);
    res.status(200).json({message: "Update sucess!"});
  });
});

app.get('/api/exercises', (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Exercises fetch successfully',
      exercises: documents
    });
  });
});

app.delete("/api/exercises/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: "Post deleted!"});
  });
});


module.exports = app;
