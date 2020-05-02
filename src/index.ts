import http, {Server, IncomingMessage, ServerResponse} from 'http'

const PORT = process.env.PORT || 8080

const server: Server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method, req.url, req.headers)

  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World!\n')
})

server.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))
