import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import AutoImport from 'unplugin-auto-import/vite'// auto-import component
import { configAutoImport } from './src/config/autoimport';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport(configAutoImport as any),// auto-import component
    svgr({
      include: "**/*.svg?react",
    })],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  // base: import.meta.env.PROD ? '/E-Commerce/' :''
  base: process.env.NODE_ENV === 'production' ? '/E-Commerce/' :''
})