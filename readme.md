things to notice

- rollup creates two entry files: one for the sever and one for the client (a build step is required for JSX)
- functions in `src/http/get-*` all delgate to `src/views/render-server` logic
- `render-server` renders html
- `render-client` hydrates html (uses `/_static/` route to load clientside)

we can get clever on a per route basis with headers and state…and you probably will in a real app!
