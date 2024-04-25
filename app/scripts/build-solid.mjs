import * as esbuild from 'esbuild';
import solidPlugin from 'esbuild-plugin-solid';

esbuild.build({
  entryPoints: ['src/index-solid.jsx'],
  bundle: true,
  minify: true,
  alias: { 'propsify': 'hyperscriptify-propsify-minimal' },
  outfile: 'dist.js',
  loader: { '.svg': 'dataurl' },
  plugins: [solidPlugin.solidPlugin()],
}).catch(() => process.exit(1))
