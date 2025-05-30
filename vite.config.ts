import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: '/web-map-service',
  resolve: {
    alias: [
      {
        find: /^@web-map-service\/(.*)$/,
        replacement: path.resolve(__dirname, `./packages/$1/src/index.ts`)
      }
    ]
  },
  server: {
    host: true,
    port: 8080,
    cors: true,
  }
})