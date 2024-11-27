import http from "http"
import express from 'express'
import { fileURLToPath } from 'url';  // For converting URL to path
import { dirname, join } from 'path';  // To join paths

// Get __dirname equivalent using ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname)));


// You can also send the HTML file explicitly
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'Home.html'))
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});