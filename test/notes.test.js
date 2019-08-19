require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('notes routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
  it('posts a note', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({ 
        title: 'Hi',
        body: 'This is a note.'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'Hi',
          body: 'This is a note.',
          __v: 0
        });
      });
  });
});
