import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://taks-managment-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
