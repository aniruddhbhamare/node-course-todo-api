  var express = require('express');
  var bodyParser = require('body-parser');


  var mongoose = require('./db/mongoose');
  var {ToDo} = require('./models/ToDo');
  var {Users} = require('./models/Users');


  var app = express();

  app.use(bodyParser.json());

  app.post('/todos',(req,res)=>{
    //console.log(req.body);
    var todo = new ToDo({
      text:req.body.text
    });
    todo.save().then((doc)=>{
      res.send(doc);
    },(e)=>{
      res.status(400).send(e);
    });
  });


  app.listen(3000,()=>{
    console.log('Server starts on port 3000');
  });







// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// const ToDo = mongoose.model('Todo',{
//   text:{
//     type:String
//   },
//   completed:{
//     type:Boolean
//   },
//   completedAt:{
//     type:Number
//   }
// });
// var newToDo = new ToDo({
//   text:'wash the car.'
// });
// newToDo.save().then((res)=>{
//   console.log('New ToDo',res);
// },(err)=>{
//   console.log(err);
// });

// var newToDo = new ToDo({
//   text:' a a m '
// });
//
// newToDo.save().then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.log(err);
// });
