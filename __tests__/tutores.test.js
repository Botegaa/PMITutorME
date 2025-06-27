const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');

describe('GET /api/tutores', () => {
  it('deve retornar status 200', async () => {
    const res = await request(app).get('/api/tutores');
    expect(res.statusCode).toBe(200);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
});