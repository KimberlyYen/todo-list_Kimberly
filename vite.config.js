import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // 如果你使用的是 Vue
// import react from '@vitejs/plugin-react'; // 如果你使用的是 React

import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()], // 使用 Vue 插件，如果你使用的是 React，请使用 react() 插件
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
