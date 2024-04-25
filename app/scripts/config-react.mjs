import linaria from '@linaria/esbuild';

const config = {
  logLevel: 'info',
  entryPoints: ['src/index-react.js'],
  outfile: 'dist.js',
  bundle: true,
  minify: true,
  alias: { 'propsify': 'hyperscriptify-propsify-standard' },
  loader: { '.svg': 'dataurl' },
  jsx: 'automatic',
    plugins: [linaria({
      esbuildOptions: {
        jsx: 'automatic',
    },
})],
}

export {config}
