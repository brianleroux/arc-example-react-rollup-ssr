import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

let server = {
  input: 'src/views/render-server.tsx',
  output: {
    dir: 'src/views/dist',
    format: 'cjs'
  },
  plugins: [
    resolve({ preferBuiltins: true }), 
    commonjs(), 
    typescript({ jsx: 'react' })
  ]
}

let client = {
  input: 'src/views/render-client.tsx',
  output: {
    dir: 'dist'
  },
  plugins: [
    resolve(), 
    commonjs(), 
    typescript({ jsx: 'react' })
  ]
}


export default [ client, server ]
