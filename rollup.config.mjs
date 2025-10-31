import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'rollup';
import css from 'rollup-plugin-import-css';

import * as scopedCSS from 'ember-scoped-css/build';

const addon = new Addon({
	srcDir: 'src',
	destDir: 'dist',
});

export default defineConfig({
	// This provides defaults that work well alongside `publicEntrypoints` below.
	// You can augment this if you need to.
	output: addon.output(),
	plugins: [
		scopedCSS.rollupPlugin({ layerName: 'my-design-system' }),
		addon.publicEntrypoints(['index.js']),

		babel({
			babelHelpers: 'bundled',
			extensions: ['.js', '.ts', '.gjs', '.gts'],
		}),

		addon.gjs(),
		addon.dependencies(),

		css({ output: 'styles.css', copyRelativeAssets: true }),

		addon.clean(),
	],
});

