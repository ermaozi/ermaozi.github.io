import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    logo: '/images/logo.svg',
    hostname: 'https://blog.ermao.net',
    footer: { message: "© 2024 二猫子" },
    profile: {
        name: '二猫子',
        description: '老老实实的二猫子',
        avatar: '/images/logo.svg',
      },
    plugins: {
      comment: {
        provider: 'Giscus',
        comment: true,
        repo: 'ermaozi/blog-comments',
        repoId: 'MDEwOlJlcG9zaXRvcnkyNTMxNDEyNzI=',
        category: 'Announcements',
        categoryId: 'DIC_kwDODxahGM4CiGNu',
      }
    }
  }),
  bundler: viteBundler(),
})