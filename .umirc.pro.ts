// .umirc.pro.ts
import { defineConfig } from 'umi';
// import Routers from './src/router/index'
export default defineConfig({
  define: {
    ENV: 'pro',
    BEFORE: 'pro',
    MODELS_PATH: '',
  },
  // routes: Routers,
  base: '/',
  publicPath: '/dist/',
  hash: false, //默认是false
  ssr: { mode: 'string', forceInitial: true, devServerRender: false },
});
