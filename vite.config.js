import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 3003, // Fallback to port 3000 if VITE_PORT is not set
  },
})
