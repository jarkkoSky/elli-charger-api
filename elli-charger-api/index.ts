import { ElliLogin, login } from "./endpoints/login.ts";
import { measuredCurrent } from "./endpoints/measured-current.ts";

export class ElliChargerApi {
  private password: string;
  private auth: ElliLogin | undefined;

  constructor() {
    const password = Deno.env.get("CHARGER_PASSWORD");

    if (!password) {
      throw new Error("Charger password not found!");
    }

    this.password = password;
  }

  async login() {
    this.auth = await login(this.password);
  }

  measuredCurrent() {
    return measuredCurrent(this.auth!.access_token);
  }
}
