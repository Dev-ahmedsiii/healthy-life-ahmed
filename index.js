import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __path = dirname(__filename);
const PORT = process.env.PORT || 3877;

app.get('/', (req, res) => {
  res.sendFile(__path + '/main.html');
});

app.listen(PORT, () => {
  console.log(`الموقع يعمل على المنفذ ${PORT}`);
});
