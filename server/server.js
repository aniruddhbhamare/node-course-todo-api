  var express = require('express');
  var bodyParser = require('body-parser');
  const {ObjectId} = require('mongodb');

  var mongoose = require('./db/mongoose');
  var {Todo} = require('./models/Todo');
  var {Users} = require('./models/Users');
  var port = process.env.PORT || 3000;


  var app = express();

  app.use(bodyParser.json());

  app.post('/todos',(req,res)=>{
    //console.log(req.body);
    var todo = new Todo({
      text:req.body.text
    });
    todo.save().then((doc)=>{
      res.send(doc);
    },(e)=>{
      res.status(400).send(e);
    });
  });

  app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
      res.send({todos});
    },(err)=>{
      res.status(400).send(err);
    })
  });

    // //GET //todoes/1234
  
    app.get('/todos/:id',(req,res)=>{
        var id =req.params.id;
        if(!ObjectId.isValid(id)) {
          return res.stauts(404).send();
        }
        Todo.findById(id).then((todo)=>{
          if(!todo){
            return res.status(404).send();
          }
          res.send({todo});
        }).catch((e)=>{
          res.status(400).send();
        });
    });





  // app.delete('')


  app.listen(port,()=>{
    console.log(`Started up on port ${port}`);
  });

module.exports={app};






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
