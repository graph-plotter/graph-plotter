import { v4 as uuidv4 } from "uuid";

import { RawChartConfig } from "./types";

export const generateRawChartConfig = (): RawChartConfig => ({
  id: uuidv4(),

  color: "#f00",
  formula: "",
  numberOfPoints: "2000",
});
