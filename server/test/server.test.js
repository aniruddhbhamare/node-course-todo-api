// const expect = require('expect');
// const request = require('supertest');
//
// const {app} = require('./../server');
// const {Todo} =require('./../models/Todo');
//
// // beforeEach((done)=>{
// //   Todo.remove({}).then(()=>done());
// // });
//
// describe('POST /todos',()=>{
//   it('Should create a new todo',(done)=>{
//
//     var text = 'Test todo text';
//       request(app)
//         .post('/todos')
//         .send({text})
//         .expect(200)
//         .expect((res)=>{
//           expect(res.body.text).toBe(text);
//         })
//         .end((err,res)=>{
//           if(err){
//             return done(err);
//           }
//           Todo.find().then((todos)=>{
//             expect(todos.length).toBe(1);
//             expect(todos[0].text).toBe(text);
//             done();
//           }).catch((e)=>done(e))
//         });
//   });
//
// });

const {ObjectId} =require('mongodb');
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/Todo');

// const todos = [
//   {
//   _id:new ObjectId(),
//   text:'First text'
//  },
// {
//   _id:new ObjectId(),
//   text:'Second text'
// }]
//


beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(()=>done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not accepect invalid data in body',(done)=>{

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err,res)=>{
        if(err){
            return done(err);
          }

          Todo.find().then((todos) => {
            expect(todos.length).toBe(0);
            done();
          }).catch((e) => done(e));
        });
      });
      ////////
//       describe('GET/todos/:id',()=>{
//       it('should return todo doc',(done)=>{
//         request(app)
//         .get(`/todos/${todos[0]._id.toHexString()}`)
//         .expect(200)
//         .expect((res)=>{
//           expect(res.body.todos.text).toBe(todos[0].text);
//         })
//         .end(done);
//       });
// })
});
