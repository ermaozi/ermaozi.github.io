import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],
  theme: plumeTheme({
    logo: '/images/logo.svg',
    home: '/blog/',
    hostname: 'https://blog.ermao.net',
    footer: { message: "© 2024 二猫子 ✉ <a href='mailto:admin@ermao.net'>admin@ermao.net</a>" },
    navbar: [
      { text: '博客', link: '/blog/' },
      { text: '标签', link: '/blog/tags/' },
      { text: '归档', link: '/blog/archives/' }
    ],
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