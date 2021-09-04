const supertest = require('supertest');
const app = require('../../../front/index');

const api = supertest(app);

test('Pruebas Servidor', async () => {
    await api
        .get('/')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')

})

const validaToken = require("../../../front/src/router/validate-tokens");
const admin = require("../../../front/src/router/admin");

test('Pruebas Servidor', async () => {
    await api
        .get('/admin', validaToken, admin)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')

})