import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import ViteRails from 'vite-plugin-rails';

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		ViteRails({
			envVars: { RAILS_ENV: 'development' },
			envOptions: { defineOn: 'import.meta.env' },
			fullReload: {
				additionalPaths: ['config/routes.rb', 'app/views/**/*'],
				delay: 300,
			},
		}),
	],
	build: { sourcemap: false },
});
