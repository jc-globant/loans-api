import { config } from './config.js';
import { server } from './server.js';

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} 🚀`);
});
