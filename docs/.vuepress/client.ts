import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeResolve((to, from, next) => {
      if (to.path === '/') {
        next('/blog/')
      } else {
        next()
      }
    })
  },
})