// globals.d.ts
namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    REDIRECT_URI: string;
    LIGHT_AUTH_SECRET_VALUE: string;
  }
}
