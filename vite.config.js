import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lee-portfolio/', // 저장소 이름과 일치시키기
})