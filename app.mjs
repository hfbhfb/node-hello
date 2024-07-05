// Importing necessary modules
import http from 'http'
import open from 'open'

const hostname = '127.0.0.1'
const port = 3000

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function openself() {
  // console.log('Start')
  await sleep(500) // Sleep for 2 seconds
  // console.log('End')

  // Example usage
  open(`http://${hostname}:${port}/`)
    .then(() => {
      console.log('Opened successfully')
    })
    .catch((err) => {
      console.error('Error opening:', err)
    })
}

// Creating a server instance
const server = http.createServer((req, res) => {
  // Setting response header
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  // Sending the response body
  res.end('Hello, World! -555- \n')
})

// Setting server to listen on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
  // openself()
})
