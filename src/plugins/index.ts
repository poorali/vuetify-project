/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'

// Types
import type { App } from 'vue'
import router from "@/plugins/router";
import pinia from "@/plugins/pinia";

export function registerPlugins (app: App) {
  app.use(pinia)
  app.use(vuetify)
  app.use(router)
}
