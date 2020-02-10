let arc = require('@architect/functions')
let { handler } = require('@architect/views/dist/render-server')

exports.handler = arc.http.async(handler)
