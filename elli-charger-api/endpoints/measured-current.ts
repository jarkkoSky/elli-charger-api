import { elliRequest } from "../elli-request.ts";

type MeasuredCurrentResponse = {
  CT1: number;
  CT2: number;
  CT3: number;
};

const MEASURED_CURRENT_PATH = "evse-settings/ct-coil-measured-current";

export function measuredCurrent(token: string) {
  return elliRequest<unknown, MeasuredCurrentResponse>(
    MEASURED_CURRENT_PATH,
    "GET",
    token
  );
}
