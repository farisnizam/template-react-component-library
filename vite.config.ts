/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@less': path.resolve(__dirname, './src/less'),
			'@modules': path.resolve(__dirname, './src/modules'),
		},
	},
	plugins: [react(), dts({ include: ['src'] })],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				math: 'always',
			},
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
	optimizeDeps: {
		exclude: ['@storybook/addon-docs'],
	},
})
