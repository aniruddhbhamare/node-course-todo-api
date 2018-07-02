  const {ObjectId} = require('mongodb');
  const {mongoose} = require('./../server/db/mongoose');
  const {Todo} = require('./../server/models/Todo');
  const {User} = require('./../server/models/Users');

    // // TODO:
    // var id = '5b38a1c61fad861c3acb2f1066';
    // if(!ObjectId.isValid(id)){
    //   console.log('Invalid Id');
    // }

    // Todo.find({_id:id}).then((todos)=>{
    // if(!todos){
    //   return console.log('Id Not Found!');
    //   }
    //   console.log('Todos',todos);
    // });
    //
    // Todo.findOne({_id:id}).then((todo)=>{
    //   if(!todo){
    //   return console.log('Id Not Found!');
    //   }
    //   console.log('Todo',todo);
    // });




    //USER
    var id = '5b3744d70244531c0c8b26';

    if(!ObjectId.isValid(id)){
      console.log('Invalid Id');
    }

    User.findById(id).then((user)=>{
      console.log(JSON.stringify(user,undefined,2));
    }).catch((e)=>console.log(e));
