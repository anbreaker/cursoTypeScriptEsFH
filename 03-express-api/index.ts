import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(401).json({
    ok: false,
    msg: 'Hello World!',
  });
});

app.listen(port, () => {
  console.log(`Listening server on Port -> http://localhost:${port}`);
});
