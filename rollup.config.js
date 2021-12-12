import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoPreprocess from 'svelte-preprocess';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

// export default {
//     input: 'storybook/main.js',
//     output: {
//         sourcemap: true,
//         format: 'iife',
//         name: 'app',
//         file: 'public/bundle.js',
//     },
//     plugins: [
//         svelte({
//             preprocess: autoPreprocess({
//                 postcss: true,
//             }),
//             // enable run-time checks when not in production
//             dev: !production,
//             // we'll extract any component CSS out into
//             // a separate file — better for performance
//             css: css => {
//                 css.write('public/bundle.css');
//             },
//         }),
//         postcss({
//             extract: 'public/utils.css',
//         }),

//         // If you have external dependencies installed from
//         // npm, you'll most likely need these plugins. In
//         // some cases you'll need additional configuration —
//         // consult the documentation for details:
//         // https://github.com/rollup/rollup-plugin-commonjs
//         nodeResolve({
//             browser: true,
//             dedupe: importee =>
//                 importee === 'svelte' || importee.startsWith('svelte/'),
//         }),
//         commonjs(),

//         // Watch the `public` directory and refresh the
//         // browser on changes when not in production
//         !production && livereload('public'),

//         // If we're building for production (npm run build
//         // instead of npm run dev), minify
//         production && terser(),
//     ],
//     watch: {
//         clearScreen: false,
//     },
// };

export default [
    {
		external: [
			'svelte',
			'svelte/animate',
			'svelte/easing',
			'svelte/internal',
			'svelte/motion',
			'svelte/store',
			'svelte/transition',
            'tailwind'
		],
		input: 'src/index.js',
		output: [
			{ file: pkg.module, 'format': 'es' },
		],
		plugins: [
			svelte({
                            preprocess: autoPreprocess({
                                postcss: true,
                            }),
                            // enable run-time checks when not in production
                            dev: !production,
                            // we'll extract any component CSS out into
                            // a separate file — better for performance
                            // css: css => {
                            //     css.write('public/bundle.css');
                            // },
                        }),
                        postcss({
                                        extract: 'public/utils.css',
                                    }),
                                    nodeResolve(),
                                    commonjs(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),
production && terser()
		],
        watch: {
                    clearScreen: false,
                },
	},
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.main, 'format': 'umd', 'name':'cr-ds' }
		],
		plugins: [
			svelte(),
			nodeResolve(),
			production && terser()
		]
	}
]