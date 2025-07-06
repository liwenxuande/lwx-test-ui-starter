import { ConfigEnv, defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig((_env: ConfigEnv): UserConfig => {
  // const root = process.cwd();
  // const envSetting = loadEnv(env.mode, root);

  // // @ts-ignore
  // console.log(env, envSetting);
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: "src/typings/auto-imports.d.ts",
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: "src/typings/components.d.ts",
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`, // 新版语法:ml-citation{ref="4,10" data="citationList"}
        },
      },
    },
  };
});
