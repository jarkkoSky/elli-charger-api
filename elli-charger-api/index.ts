import { login } from "./endpoints/login.ts";
import { measuredCurrent } from "./endpoints/measured-current.ts";
import { refreshAuth } from "./endpoints/refresh-auth.ts";

export class ElliChargerApi {
  #password: string;
  #refreshToken = "";
  #accessToken = "";

  constructor() {
    const password = Deno.env.get("CHARGER_PASSWORD");

    if (!password) {
      throw new Error("Charger password not found!");
    }

    this.#password = password;
  }

  async init() {
    const { refresh_token, access_token } = await login(this.#password);

    this.#refreshToken = refresh_token;
    this.#accessToken = access_token;

    setInterval(async () => {
      this.#accessToken = (await refreshAuth(this.#refreshToken)).access_token;
    }, 60_000);
  }

  measuredCurrent() {
    return measuredCurrent(this.#accessToken);
  }
}
