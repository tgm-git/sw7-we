let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(__dirname));
app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Example listening on port 3000!');
});

module.exports = app;