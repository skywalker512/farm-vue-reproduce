import { defineConfig, JsPlugin } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import { type Plugin } from 'vite';

const b: Plugin = {
  name: 'b',
  transform(code, id, options) {
    if (id.includes('a.ts')) {
      return {
        // code: `import './style.css?type=style&index=0&src=7a7a37b1&scoped=7a7a37b1&lang.css'`,
        code: `import './style.css?vue&type=style&index=0&src=7a7a37b1&scoped=7a7a37b1&lang.css'`,
      };
    }
  },
};

export default defineConfig({
  vitePlugins: [vue(), b],
});
