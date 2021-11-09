const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use('/', express.static('./client/dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
