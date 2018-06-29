const {MongoClient,ObjectId} = require('mongodb');
// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApplication',(err,db)=>{
  if(err){
    return console.log('Unable to connect mongoDB server 1');
  }
  console.log('Successfully Connected to MongoDB Server');


  //findOneAndUpate
  // db.collection('Todos').findOneAndUpdate(
  //   {_id:new ObjectId('5b35bc76cbfdc93f2fbeab34')},
  //   {
  //   $set:{
  //     text:'do coding',
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(JSON.stringify(res,undefined,2));
  // },(err)=>{
  //   console.log(`Unable to Update field`);
  // });

  db.collection('Users').findOneAndUpdate(
    {_id :new ObjectId("5b35bedfcbfdc93f2fbead09")},
    { $set:{ name:'Aniruddha' },$inc:{age:1} },
    { returnOriginal:false}
  ).then((res)=>{
    console.log(JSON.stringify(res,undefined,2));
  },(err)=>{
    console.log('Unable to Update fild');
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
