import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // If you're using any preprocessor like SCSS, you can add configurations here
      css: {
        // Additional configuration if needed
      },
    },
  },
})
