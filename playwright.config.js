// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [['html', { open: 'off' }]], // Genera y abre el reporte automáticamente
  use: {
    //headless: false, // Opcional: para que se vea el navegador
    headless: process.env.CI ? true : false, // GitHub Actions
    launchOptions: {
      slowMo: 1000 // Wait entre acciones para mostrar en clase
    },
    /**
   * 📸 SCREENSHOT OPTIONS
   *
   * 'on' → toma screenshot en TODOS los tests
   * 'only-on-failure' → toma screenshot SOLO si el test falla (recomendado)
   * 'off' → no toma screenshots
   */
  screenshot: 'only-on-failure',

  /**
   * 🎥 VIDEO OPTIONS
   *
   * 'on' → graba video en TODOS los tests
   * 'retain-on-failure' → solo guarda el video si el test falla (recomendado)
   * 'on-first-retry' → graba solo cuando el test se reintenta
   * 'off' → no graba video
   */
  video: 'off',

  /**
   * 🔍 TRACE OPTIONS (DEBUGGING PRO)
   *
   * 'on' → guarda trace en TODOS los tests (pesado)
   * 'retain-on-failure' → guarda trace solo si falla
   * 'on-first-retry' → guarda trace cuando el test falla y se reintenta (🔥 recomendado)
   * 'off' → no genera trace
   *
   * El trace permite ver:
   * - pasos del test
   * - DOM snapshots
   * - network
   * - consola
   */
  trace: 'on-first-retry',   
  },
  testDir: './tests',
  fullyParallel: true,
  workers: 4,

      /**
   * 🌐 CROSS BROWSER TESTING
   *
   * Cada proyecto representa un navegador diferente.
   *
   * Chrome   → Motor de Google Chrome
   * Chromium → Motor de Google Chrome y Microsoft Edge
   * Firefox  → Mozilla Firefox
   * WebKit   → Motor de Safari
   *
   * Si ejecutas:
   * npx playwright test
   *
   * Los tests correrán automáticamente en los 3 navegadores.
   */
  projects: [
  {
    name: 'Google Chrome',
    use: {
      ...devices['Desktop Chrome'],
      channel: 'chrome',
    },
  },
  {
    name: 'Chromium',
    use: {
      ...devices['Desktop Chrome'],
    },
  },
  {
    name: 'Firefox',
    use: {
      ...devices['Desktop Firefox'],
    },
  },
  {
    name: 'WebKit',
    use: {
      ...devices['Desktop Safari'],
    },
  },
  {
    name: 'iPhone 15',
    use: {
      ...devices['iPhone 15'],
    },
  },
],
});