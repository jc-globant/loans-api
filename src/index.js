import { config } from './config.js'
import { server } from './server.js'

server.listen(config.PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on port ${config.PORT} 🚀`);
})
