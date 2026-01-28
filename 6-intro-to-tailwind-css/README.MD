# settup and installation of tailwind css with vite

# 1 command 
npm create vite 
if created then use # 2 command

# 2 command
Terminal:cd choose folder
terminal : 
npm install tailwindcss @tailwindcss/vite

# 3 step 
vite.config.js
inside :-
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

# 4 step 
inside:- index.css
ctrl+a=delete
@import "tailwindcss";

# 5 commad
terminal : npm run dev