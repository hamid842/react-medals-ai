import path from "path";
import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const projectRootDir = resolve(path.resolve());
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    plugins: [
        react(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: resolve(projectRootDir, 'src')
                }
            ]
        })
    ],
})
