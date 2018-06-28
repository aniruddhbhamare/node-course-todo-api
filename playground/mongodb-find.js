const {MongoClient,ObjectId} = require('mongodb');
// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApplication',(err,db)=>{
  if(err){
    return console.log('Unable to connect mongoDB server 1');
  }
  console.log('Successfully Connected to MongoDB Server');

//find({completed: false})
  // db.collection('Todos').find({_id:new ObjectId('5b34e73acbfdc93f2fbe988b')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to featch Todos',err);
  //   });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log('Unable to featch Todos',err);
  //   });


  db.collection('Users').find({name:'Aniruddh'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to find Collection');
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
