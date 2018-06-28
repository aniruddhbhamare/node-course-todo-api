const {MongoClient,ObjectId} = require('mongodb');
// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApplication',(err,db)=>{
  if(err){
    return console.log('Unable to connect mongoDB server 1');
  }
  console.log('Successfully Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text:'Create First Database',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     console.log('Unable to Insert Create First Database',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    //_id:1,
    name:'Aniruddh',
    age:28,
    location:'Punw,Maharashtra,India'
  },(err,result)=>{
    if(err){
      return console.log('unavle to insert data into Users collection');
    }
   console.log(JSON.stringify(result.ops,undefined,2));
//  console.log(result.ops[0]._id.getTimestamp());

  });


  db.close();
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
