import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: resolve('src/components'),
          $stores: resolve('src/stores'),
          $actions: resolve('src/actions')
        }
      }
    }
	}
};

export default config;
