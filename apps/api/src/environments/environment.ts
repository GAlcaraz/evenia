import * as process from 'node:process';

export const apiEnv: IApiEnv = {
  isProd: process.env.EVENIA_ENV === 'production',
  api: {
    port: Number(process.env.EVENIA_API_PORT),
  },
  db: {
    url: process.env.EVENIA_DB_URL,
  },
};

export interface IApiEnv {
  isProd: boolean;
  api: {
    port: number;
  };
  db: {
    url: string;
  };
}
