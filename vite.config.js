import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 5174,
  },
  // resolve: {
  // 	alias: {
  // 	  "~firebird-common": path.resolve(__dirname, "node_modules/firebird-common"),
  // 	},
  // 	// extensions: ['.mjs', '.js', '.ts', '.json', '.svelte', '.scss'],
  //   },
});
