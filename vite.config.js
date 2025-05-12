import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/OpenPros/',  // ✅ 必须与仓库名完全一致（区分大小写！）
  plugins: [react()],
});