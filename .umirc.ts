import { defineConfig } from 'dumi';

const repo = 'polaris-note'; // 项目名

export default defineConfig({
  title: '粉色小猪',
  mode: 'site',
  devServer: {
    port: 2000, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
});
