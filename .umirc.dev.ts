// .umirc.dev.ts
import { defineConfig } from 'umi';
export default defineConfig({
  define: {
    ENV: 'dev',
    BEFORE: 'dev',
    MODELS_PATH: 'http://192.168.10.3:3016',
  },
  devServer: { port: 3016 },
  hash: true, //默认是false
  ssr: { mode: 'string', forceInitial: true, devServerRender: true },
});
