/// <reference types="vitest" />
import content from '@originjs/vite-plugin-content';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envVariables = loadEnv(mode, __dirname);
  console.table(envVariables);

  return {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({
        autoImportComponentCase: 'pascal',
        sassVariables: 'src/quasar-variables.scss',
      }),
      content(),
    ],
    test: {
      environment: 'happy-dom',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset(atRule) {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
  };
});
