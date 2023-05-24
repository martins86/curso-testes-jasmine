// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'data/db.json'))

server.use(middlewares)
server.use(router)
server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next()
  } else {
    res.sendStatus(401)
  }
})

 server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.listen(3004, () => {
  console.log('JSON Server is running')
})
