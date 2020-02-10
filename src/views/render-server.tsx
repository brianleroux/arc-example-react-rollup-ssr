import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { App } from './app'

export async function handler(req) {
  return { 
    html: render({ path: req.path })
  }
}

function render(params) {
  let body = ReactDOMServer.renderToString(<App state={params} />)   
  return `<!doctype html>
<html>
<body>
<div id=root>${body}</div>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script>window.STATE=${JSON.stringify(params)}</script>
<script src=/_static/render-client.js></script>
</body>
</html>`
}
