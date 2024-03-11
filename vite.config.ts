import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/playGamePCK',
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 设置 @ 别名为项目根目录下的 src 文件夹
    },
  },
  server: {
    proxy: {
      '/pachinko': {
        target: 'http://10.139.140.127:8878/', // hanli
        // target: 'http://10.139.140.122:8878/', // shuke
        // target: 'https://api-v4.dmrd-test.com/', // 测试
        // target: 'https://www.isuat.net ', // UAT
        // target: 'https://isgame.net', // 线上
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pachinko/, ''), // 重写请求路径，将 '/api' 替换为空字符串
      },
    },
  },
})