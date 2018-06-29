const {MongoClient,ObjectId} = require('mongodb');
// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApplication',(err,db)=>{
  if(err){
    return console.log('Unable to connect mongoDB server 1');
  }
  console.log('Successfully Connected to MongoDB Server');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Create First Database'}).then((result)=>{
  //   console.log(result);
  // },(err)=>{
  //   console.log(`Unable to delete ${err}`);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Create First Database'}).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(`Unable to delet ${err}`);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:true}).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(`Unable to delet ${err}`);
  // });

  //deleteMany
  // db.collection('Users').deleteMany({name:'Aniruddh'}).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(`Unable to dlete field`);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id:new ObjectId('5b34c11a8adc422d3096c450')}).then((res)=>{
    console.log(JSON.stringify(res,undefined,2));
  },(err)=>{
    console.log(`Unable to dlete field`);
  });


  //db.close();
});











// const MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/ToDoAppNew',(err,db)=>{
//   if(err){
//     return console.log('Unable to connect MongoDb server');
//   }
//   //const db = client.db('ToDoAppNew')
//     console.log('Connected to MongoDb Server');
//
//     db.collection('Todos').insertOne({
//       text:'Somthing to do ',
//       completed:false
//     },(err,result)=>{
//       if(err){
//         return console.log('Unable to insert todo',err);
//       }
//      console.log(JSON.stringify(result.ops,undefined,2));
//
//     });
//
//
//    db.close();
// });
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   const db = client.db('TodoApp')
//   console.log('Connected to MongoDB server');
//   db.collection('Todos').insertOne({
//     text: 'Wash car',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//   client.close();
// });
