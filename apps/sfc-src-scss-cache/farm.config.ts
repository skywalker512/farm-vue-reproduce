import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import sass from '@farmfe/js-plugin-sass';

export default defineConfig({
  plugins: [sass()],
  vitePlugins: [vue()],
});
