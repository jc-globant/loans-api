import { config } from './config.js';
import { app } from './server.js';

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} 🚀`);
});
