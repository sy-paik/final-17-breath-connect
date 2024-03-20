import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		port: 3000, // 서버 포트 번호 변경
	},
	define: {
		global: '{}',  // 글로벌 객체를 빈 객체로 대체
	},
	build: {
		outDir: 'build', // build 폴더명 변경
		assetsDir: 'static', // build 폴더 내 assets 폴더명 변경
	},
});