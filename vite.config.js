import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    // Add these exclude patterns:
    include: [
      'src/**/*.test.{js,jsx,ts,tsx}'
    ],
    reporters: ['default', 'json'],
    outputFile: {
      json: './test.json'
    }
    // or 
    // reporters: ['json', 'default'],
    // outputFile: './test-output.json'
  }
});