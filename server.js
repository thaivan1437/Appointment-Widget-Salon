const express = require('express')
const next = require('next')
const { PORT } = require('./src/commons/Config')

// const port = parseInt(process.env.PORT, 10) || PORT
const port = PORT
// const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Ready on server port: ${port}`)
  })
})
