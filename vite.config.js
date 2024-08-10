import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3017,
    historyApiFallback: true,
  },
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
