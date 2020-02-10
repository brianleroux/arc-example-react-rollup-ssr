import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

let client = {
  input: 'src/views/render-client.tsx',
  output: {
    dir: 'dist',
    format: 'iife',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript({ jsx: 'react' })
  ]
}

let server = {
  input: 'src/views/render-server.tsx',
  output: {
    dir: 'src/views/dist',
    format: 'cjs'
  },
  external: ['stream'],
  plugins: [
    resolve({ preferBuiltins: true }), 
    commonjs(), 
    typescript({ jsx: 'react' })
  ]
}


export default [ client, server ]
