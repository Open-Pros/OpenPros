import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Prostate/',  // GitHub Pages 需要仓库名称作为基础路径
  plugins: [react()],
});
