const Fastify = require('fastify')
const app = Fastify()

const PORT = process.env.PORT
const HOST = process.env.HOST
const UPSTREAM_URL = process.env.UPSTREAM_URL

app.register(require('@fastify/http-proxy'), { upstream: UPSTREAM_URL })

app.listen({ port: PORT, host: HOST })
