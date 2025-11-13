// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://roikat.github.io',
  integrations: [sitemap()],
  experimental: {
    fonts: [
      {
        cssVariable: '--font-inter',
        name: 'Inter',
        provider: fontProviders.google()
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
