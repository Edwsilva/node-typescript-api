// https://github.com/seanpmaxwell/overnight/tree/master/src/logger
import './util/module-alias';
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';

export class SetupServer extends Server {

  /*
   * same as this.port = port, declaring as private here will
   * add the port variable to the SetupServer instance
   */
  constructor(private port = 3000) {
    super();
  }
  
  /*
   * We use a different method to init instead of using the constructor
   * this way we allow the server to be used in tests and normal initialization
   */
  // init() será utilizado para inciar o construtor
//   public async init(): Promise<void> {
    // chamando o setExpress e o setupControllers
//     this.setupExpress();
//     this.setupControllers();
//   }
  public init(): void {
    this.setupExpress()
    this.setupControllers();
  }

  // Seta o express
  private setupExpress(): void {
    //passando um middleware para decodificar dados
    this.app.use(bodyParser.json());
    //this.setupControllers();
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    // encaminhando esse controller para o OvernightJS
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}