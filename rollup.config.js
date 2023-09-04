// import pkg from './package.json';
import babel from '@rollup/plugin-babel';

export default {
  input: "src/index",
  output: [
    {
      file: 'lib/index-es.js',
      format: "es",
    }
  ],
  plugins: [babel()]
}