const request = require('supertest');
const app = require('./app');

test('Homepage returns correct message', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe('Hello from Jenkins Demo!');
});

test('Health check works', async () => {
  const response = await request(app).get('/health');
  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBe('healthy');
});