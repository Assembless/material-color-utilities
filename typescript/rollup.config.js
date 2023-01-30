import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './src/index.ts',
  output: {
      dir: 'dist',
      entryFileNames: 'index.js'
  },
  plugins: [typescript(), nodeResolve({ extensions: ['.ts', '.js'] })]
});