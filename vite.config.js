import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_MAIL_JS_SERVICE_ID": JSON.stringify(
      process.env.VITE_MAIL_JS_SERVICE_ID
    ),
    "process.env.VITE_MAIL_JS_TEMPLATE_ID": JSON.stringify(
      process.env.VITE_MAIL_JS_TEMPLATE_ID
    ),
    "process.env.VITE_MAIL_JS_PUBLIC_KEY": JSON.stringify(
      process.env.VITE_MAIL_JS_PUBLIC_KEY
    ),
  },
});
