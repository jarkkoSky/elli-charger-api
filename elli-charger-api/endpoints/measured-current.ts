import { elliRequest } from "../utils/elli-request.ts";

type MeasuredCurrentResponse = {
  CT1: number;
  CT2: number;
  CT3: number;
};

const PATH = "evse-settings/ct-coil-measured-current";

export function measuredCurrent(token: string) {
  return elliRequest<unknown, MeasuredCurrentResponse>(PATH, "GET", token);
}
