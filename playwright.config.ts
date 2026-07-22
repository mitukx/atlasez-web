import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  use: {
    baseURL: process.env.E2E_BASE_URL ?? "http://localhost:4321",
  },
  webServer: {
    command: "npx astro preview --port 4321",
    port: 4321,
    reuseExistingServer: true,
  },
});
