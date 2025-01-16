import { ElliChargerApi } from "./elli-charger-api/index.ts";

if (import.meta.main) {
  const api = new ElliChargerApi();
  await api.init();

  setInterval(async () => {
    await api.measuredCurrent();
  }, 5_000);
}
