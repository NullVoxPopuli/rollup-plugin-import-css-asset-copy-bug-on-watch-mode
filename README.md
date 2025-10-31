Reproduction of an issue with rollup-plugin-import-css's new copyRelativeAssets feature:



1. clone this repo
2. cd
3. `pnpm install`
4. `pnpm start` (starts rollup watch mode)
5. save `src/components/empty-state.gts` to trigger a rebuild
6. observe the error:
	```bash
	❯ pnpm start
	
	> repro@0.0.0 start <repo>
	> rollup --config --watch --no-watch.clearScreen
	
	rollup v4.52.4
	bundles  → dist...
	created dist in 136ms
	
	[2025-10-31 11:08:27] waiting for changes...
	bundles  → dist...
	[!] (plugin import-css) Error: ENOENT: no such file or directory, open '<repo>/src/components/assets/command-empty-DlVeym01.png'
		at Object.openSync (node:fs:560:18)
		at Object.readFileSync (node:fs:444:35)
		at Object.generateBundle (file://<.pnpm>/rollup-plugin-import-css@4.1.0_rollup@4.52.4/node_modules/rollup-plugin-import-css/dist/plugin.js:100:26)
		at <.pnpm>/rollup@4.52.4/node_modules/rollup/dist/shared/rollup.js:3392:40
	```
