import { elliRequest } from "../elli-request.ts";

export type ElliLogin = {
  refresh_token: string;
  access_token: string;
};

type RequestBody = {
  password: string;
};

const LOGIN_PATH = "auth/login";

export async function login(password: string) {
  return await elliRequest<RequestBody, ElliLogin>(
    LOGIN_PATH,
    "POST",
    undefined,
    {
      password,
    }
  );
}
