import config from "./config.ts";
import { ElliChargerApi } from "./elli-charger-api/index.ts";
import { Application, Router } from "@oak/oak";

const router = new Router();
const api = new ElliChargerApi();
await api.init();

router.get("/energy-meter", async (ctx) => {
  const measuredCurrent = await api.measuredCurrent();

  ctx.response.body = {
    ...measuredCurrent,
    powerKw: (measuredCurrent.CT1 + measuredCurrent.CT2 + measuredCurrent.CT3) * 230 * 0.001,
    timestamp: new Date().toISOString()
  };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: config.serverPort });
