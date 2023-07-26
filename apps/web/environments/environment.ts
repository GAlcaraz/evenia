export const webEnv: IWebEnv = {
  isProd: process.env.EVENIA_ENV === 'production',
  api: {
    gqlUrl: process.env.EVENIA_WEB_GQL_URL,
  },
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
}
