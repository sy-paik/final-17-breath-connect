import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000, 
  },
  define: {
    global: '{}', 
  },
  build: {
    outDir: 'build', 
    assetsDir: 'static', 
  },
});
