  const {ObjectId} = require('mongodb');
  const {mongoose} = require('./../server/db/mongoose');
  const {Todo} = require('./../server/models/Todo');
  const {User} = require('./../server/models/Users');


    // Todo.remove({}).then((res)=>{
    //   console.log(res);
    // });

    // Todo.findOneAndRemove({_id:'5b38a1c61fad861c3acb2f10'}).then((todo)=>{
    //   console.log(todo);
    // });

    Todo.findByIdAndRemove('5b38a1d81fad861c3acb2f11').then((res)=>{
      console.log(res);
    });
