import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react(), reactRefresh()],
		base: '/',
		build: {},
		define: {
			'process.env': env,
		},
		server: {
			historyApiFallback: true,
		},
	};
});
