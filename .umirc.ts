import { defineConfig } from 'dumi';

const repo = 'polaris-note'; // 项目名

const path = process.env.NODE_ENV === 'production' ? `/${repo}/` : '/';
const logo = path + 'images/logo.jpg';

export default defineConfig({
  title: '粉色小猪',
  favicon: logo,
  logo,
  mode: 'site',
  devServer: {
    port: 2000, // 自定义端口号
  },
  base: path,
  publicPath: path,
  locales: [['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
});
