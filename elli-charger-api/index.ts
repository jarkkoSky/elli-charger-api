import { login } from "./endpoints/login.ts";
import { measuredCurrent } from "./endpoints/measured-current.ts";
import { refreshAuth } from "./endpoints/refresh-auth.ts";
import config from "../config.ts"

const AUTH_REFRESH_INTERVAL = 60_000

export class ElliChargerApi {
  #refreshToken = "";
  #accessToken = "";

  async init() {
    const { refresh_token, access_token } = await login(config.chargerPassword);

    this.#refreshToken = refresh_token;
    this.#accessToken = access_token;

    setInterval(async () => {
      this.#accessToken = (await refreshAuth(this.#refreshToken)).access_token;
    }, AUTH_REFRESH_INTERVAL);
  }

  measuredCurrent() {
    return measuredCurrent(this.#accessToken);
  }
}
