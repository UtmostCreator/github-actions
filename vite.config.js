import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    // Add these exclude patterns:
    exclude: [
      '**/node_modules/**',
      '**/tests/**',  // Exclude Playwright tests
      '**/dist/**'    // exc to run test from production env
    ]
  }
});