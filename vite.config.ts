import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cos-tam/', // Nazwa Twojego repozytorium na GitHub
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Zapewnia odpowiednie rozdzielenie plików
      },
    },
  },
});
