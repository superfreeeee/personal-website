import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('react-icons')) {
            return 'lib-icons';
          }
          if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('react')) {
            return 'lib-react';
          }
        },
      },
    },
  },
});
