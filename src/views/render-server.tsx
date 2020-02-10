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
<script>window.STATE=${JSON.stringify(params)}</script>
<script src=/_static/client.js></script>
</body>
</html>`
}
