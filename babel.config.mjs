import * as scopedCSS from 'ember-scoped-css/build';

export default function (api) {
	api.cache(true);

	return {
		plugins: [
			['@babel/plugin-transform-typescript', { onlyRemoveTypeImports: true, allowDeclareFields: true }],

			[scopedCSS.babelPlugin, { layerName: 'my-design-system' }],
			[
				'babel-plugin-ember-template-compilation',
				{
					targetFormat: 'hbs',
					transforms: [
						scopedCSS.templatePlugin({ layerName: 'my-design-system' }),
					],
				},
			],
			['module:decorator-transforms', { runtime: { import: 'decorator-transforms/runtime' } }],
		],
	};
}
