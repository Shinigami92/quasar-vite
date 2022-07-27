import { startDevServer } from '@cypress/vite-dev-server';
import { defineConfig } from 'cypress';
import { resolve } from 'node:path';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      on('dev-server:start', async (options) => {
        return startDevServer({
          options,
          viteConfig: {
            configFile: resolve(__dirname, 'vite.config.ts'),
          },
        });
      });

      return config;
    },
  },

  viewportWidth: 1800,
  viewportHeight: 950,

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});
