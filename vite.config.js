import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/ecomJenkinspractice/',
})
// ecomJenkinspractice/:11   GET http://localhost:9090/ecommerce/assets/index-D8wDBqOF.js net::ERR_ABORTED 404 (Not Found)
