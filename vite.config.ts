import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://github.com/devtechster/Guess-the-Country-Fullstack-Project.git',  // 🔴 Important!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
