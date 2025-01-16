import { elliRequest } from "../utils/elli-request.ts";

type RefreshAuthResponse = {
  access_token: string;
};

type RefreshAuthRequest = {
  refresh_token: string;
};

const PATH = "auth/refresh";

export async function refreshAuth(refreshToken: string) {
  return await elliRequest<RefreshAuthRequest, RefreshAuthResponse>(
    PATH,
    "POST",
    undefined,
    {
      refresh_token: refreshToken,
    }
  );
}
