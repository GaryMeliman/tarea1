import express, { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import l from './logger';

import installValidator from './swagger';
import database from './database';
import Examples from '../api/model/example';
import { Op } from 'sequelize';

const app = express();
const exit = process.exit;

export default class ExpressServer {
  private routes: (app: Application) => void;
  constructor() {
    require('dotenv').config();
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
    app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
    this.createDatabase();
  }

  async createDatabase() {
    await database.sync();
    this.seedExamples();
  }

  router(routes: (app: Application) => void): ExpressServer {
    this.routes = routes;
    return this;
  }

  listen(port: number): Application {
    const welcome = (p: number) => (): void =>
      l.info(
        `up and running in ${
          process.env.NODE_ENV || 'development'
        } @: ${os.hostname()} on port: ${p}}`
      );

    installValidator(app, this.routes)
      .then(() => {
        http.createServer(app).listen(port, welcome(port));
      })
      .catch((e) => {
        l.error(e);
        exit(1);
      });

    return app;
  }

  async seedExamples() {
    Examples.destroy({ where: { idExample: { [Op.gt]: 0 } } });
    const examples = [
      { name: 'INDIANRED' },
      { name: 'LIGHTCORAL' },
      { name: 'SALMON' },
      { name: 'DARKSALMON' },
      { name: 'LIGHTSALMON' },
      { name: 'CRIMSON' },
      { name: 'RED' },
      { name: 'FIREBRICK' },
      { name: 'DARKRED' },
    ];
    Examples.bulkCreate(examples);
  }
}
