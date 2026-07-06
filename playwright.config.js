// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [['html', { open: 'off' }]], // Genera y abre el reporte automáticamente
  use: {
    headless: false, // Opcional: para que se vea el navegador
    //headless: process.env.CI ? true : false, // GitHub Actions
    launchOptions: {
      slowMo: 10 // Wait entre acciones para mostrar en clase
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
  video: 'on',

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
});