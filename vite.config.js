import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    base: '/',
    plugins: [vue()],

    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ['console.log', 'console.info', 'console.debug'] : []
        }
      },

      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'vue-router'],
            'bootstrap': ['bootstrap', '@popperjs/core'],
            'fontawesome': ['@fortawesome/fontawesome-free']
          },

          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split('.').pop()

            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return 'assets/images/[name]-[hash][extname]'
            }
            if (/woff|woff2|ttf|eot/i.test(extType)) {
              return 'assets/fonts/[name]-[hash][extname]'
            }
            if (/css/i.test(extType)) {
              return 'assets/css/[name]-[hash][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          },

          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        }
      },

      chunkSizeWarningLimit: 1000,

      cssCodeSplit: true,

      sourcemap: !isProduction,

      reportCompressedSize: true,

      target: 'es2020'
    },

    optimizeDeps: {
      include: ['vue', 'vue-router', 'bootstrap']
    },
    server: {
      port: 5173,
      strictPort: false,
      open: false,
      cors: true
    },

    preview: {
      port: 4173,
      strictPort: false,
      open: false
    }
  }
})
