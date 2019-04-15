import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';
import resolve from 'rollup-plugin-node-resolve';

const config = {
  input: 'src/ExtensionExample.js',
  output: {
    dir: 'dist',
    entryFileNames: 'extension.[hash].js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    externalGlobals({
      'carbon-components-react': 'CarbonComponentsReact',
      'react': 'React',
      'react-dom': 'ReactDOM'
    }),
    cleanup()
  ]
};

export default config;
