// https://www.youtube.com/watch?v=OJYsN4DcLQQ&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&index=6&ab_channel=WaldemarNeto-DevLab
// 24 min
// Esse arquivo será carregado automaticamente pelo typescript

/**
 * @Update 2022 - This has logic has been update to support newer Node.js versions
 * that don't have NodeJS as a global type
 */
// import { Supertest } from 'supertest'
declare global {
  //eslint-disable-next-line no-var
  // https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts/51114250#51114250
  // O supertest precisa ser importado inline para o TS não tratar como modulo local
  // Isso é para adicionar tipos aos tipos globais
  var testRequest: import("supertest").SuperTest<import("supertest").Test>;
}

export {};
// declare namespace NodeJS {
//     interface Global {
//         testRequest: import("supertest").SuperTest<import("supertest").Test>;
//     }
// }
