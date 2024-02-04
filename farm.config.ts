import { defineConfig, JsPlugin } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';

const a: JsPlugin = {
  name: 'a',
  transform: {
    filters: {
      resolvedPaths: ['a.ts'],
    },
    executor(param, context, hookContext) {
      console.log(param, context, hookContext);
      return {
        content: `import './style.scss?q=2&c=3';`,
        moduleType: 'js',
      };
    },
  },
};

export default defineConfig({
  plugins: [a],
  vitePlugins: [vue()],
});
