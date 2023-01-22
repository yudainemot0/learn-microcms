import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "learn-microcms",
  apiKey: process.env.API_KEY,
});
