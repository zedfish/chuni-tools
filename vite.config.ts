import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import { defineConfig, loadEnv} from 'vite'

const env = loadEnv(process.env.ENV!, process.cwd(), '');

export const viteDefine = {
	__ENV__: JSON.stringify(process.env.ENV || 'development'),
	__INTL_VERSION__: JSON.stringify('xversex'),
	__JP_VERSION__: JSON.stringify('mate'),
	__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __HOST__: JSON.stringify(env.VITE_HOST),
    __PORT__: Number(env.VITE_PORT),
}

const serverConfig =
    env.ENV === 'development'
        ? {
            host: env.VITE_HOST,
            port: Number(env.VITE_PORT),
            cors: {
                origin: '*',
                credentials: true
            },
            fs: {
                allow: ['..']
            },
            https: {
                key: fs.readFileSync('./.cert/key.pem'),
                cert: fs.readFileSync('./.cert/cert.pem')
            }
        }
        : {}

export default defineConfig({
    assetsInclude: ['**/*.md'],
    define: viteDefine,
    plugins: [
        paraglideVitePlugin({
            project: './i18n/project.inlang',
            outdir: './src/lib/paraglide',
            strategy: ['cookie', 'baseLocale']
        }),
        tailwindcss(),
        sveltekit()
    ],
    server: serverConfig,
})
