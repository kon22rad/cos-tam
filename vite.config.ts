import { defineConfig } from 'vite'; // Dodaj ten import na początku pliku
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cos-tam/', // Zaktualizuj nazwę repozytorium
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});