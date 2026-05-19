import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // esbuild is faster than terser and almost as good at minifying.
    minify: 'esbuild',
    // Inline assets under 4 KB as base64 to save HTTP requests on mobile.
    assetsInlineLimit: 4096,
    // Drop sourcemaps in prod — saves bandwidth.
    sourcemap: false,
    // Higher warning limit since our biggest chunk is React itself.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split heavy/optional deps into their own chunks so the home-page bundle
        // stays small. (When Supabase is re-enabled, add it back here:
        //   'vendor-supabase': ['@supabase/supabase-js']
        // Right now only TS type imports remain, so it tree-shakes to ~0 bytes.)
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
});
