  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'


  export default defineConfig({
    plugins: [react(),
    tailwindcss(),

    ],  
    server: {
      historyApiFallback: true,
      host: '0.0.0.0', // Allow access from any network
      port: 3000,       // You can change this port if needed
    },
    


  })


