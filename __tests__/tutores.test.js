const request = require('supertest');
const app = require('./src/app.js');

describe('GET /tutores', () => {
  it('deve retornar status 200', async () => {
    const res = await request(app).get('/tutores');
    expect(res.statusCode).toBe(200);
  });
});