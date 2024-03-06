// Reponsável por inicializar o servidor para todos os testes funcionais
import { SetupServer } from '@src/server';
import supertest from 'supertest';

// beforeAll será chamadado antes de tudo para fazer o setup do server
// module.exports = {...rootConfig, ...{
//     rootDir: root,
//     displayName: "end2end-tests",
// ==>    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
//     // only files in this directory
//     testMatch: ["<rootDir>/test/**/*.test.ts"],
//   }}

beforeAll(() => {
  const server = new SetupServer();

  server.init();
  // O método getApp() precisa para disponibilizar o APP
  global.testRequest = supertest(server.getApp())
  //global.testRequest = supertest(server.getApp());
})