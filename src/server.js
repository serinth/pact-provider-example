import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import middleware from './middleware';
import traveller from './api/traveller';
import config from './config.json';
import health from './api/health';
import info from './api/info';
import pactProvider from './api/pactProvider';

export default function (){

  const nodeEnvironment = process.env.NODE_ENV || 'development';

  let app = express();
  const server = require('http').createServer(app);

  // 3rd party middleware
  app.use(cors({
    exposedHeaders: config.corsHeaders
  }));

  app.use(bodyParser.json({
    limit : config.bodyLimit
  }));

  if(nodeEnvironment !== 'production'){
    const devRoutes = {
      '/': pactProvider
    };

    Object.keys(devRoutes).forEach( (route) => app.use(route,devRoutes[route]({ config })));
  }

  // internal middleware
  app.use(middleware({ config }));

  // health check and info check for autoscaling
  app.use('/api/health', health());
  app.use('/api/info', info());

  // api router
  app.use('/api/traveller', traveller({ config }));

  server.listen(process.env.PORT || config.port);

  return server;


}
