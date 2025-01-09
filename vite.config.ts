import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import env from './env';

const proxy = {
  '^/permissions': {
    target: 'http://power.hpyyb.cn/',
    changeOrigin: true
  }
}
declare const process;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue()],

  base: env.BASE_URL,

  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": "/src",
      "~": "",
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },

  clearScreen: false,
  server: { proxy },
  preview: { proxy },
}));
