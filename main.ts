import { ElliChargerApi } from "./elli-charger-api/index.ts";

if (import.meta.main) {
  const api = new ElliChargerApi();
  await api.login();
  await api.measuredCurrent();
}
