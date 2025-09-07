import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/landing-page/' // coloque aqui o nome EXATO do seu repositório
})


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
