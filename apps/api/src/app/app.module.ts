import { EventModule } from '@evenia/api/feature-event';
import { UserModule } from '@evenia/api/feature-user';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import * as path from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gql'),
    }),
    UserModule,
    EventModule,
  ],
  providers: [],
})
export class AppModule {}
