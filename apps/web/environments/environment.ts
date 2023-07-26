export const webEnv: IWebEnv = {
  isProd: process.env.EVENIA_ENV === 'production',
  api: {
    gqlUrl: process.env.EVENIA_WEB_GQL_URL || 'http://localhost:3000/graphql',
  },
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
}
