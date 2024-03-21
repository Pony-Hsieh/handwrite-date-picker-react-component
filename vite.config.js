import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  base:
    // eslint-disable-next-line
    process.env.NODE_ENV === 'production'
      ? '/handwrite-date-picker-react-component/'
      : '/',
});
