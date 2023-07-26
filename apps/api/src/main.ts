/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { apiEnv } from './environments/environment';
// import helmet from '@fastify/helmet'

const { isProd, api } = apiEnv;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true }
  );
  // TODO: Add (fix issue with) helmet for added security
  // await app.register(helmet)
  const port = api.port;
  await app.listen(port);
  Logger.log(
    `🚀 Playground is running on: http://localhost:${api.port}/graphiql`
  );
}

bootstrap();
