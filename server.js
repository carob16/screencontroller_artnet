const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const db = require('./db/db-manager.js');
//const THREE = require('three');

const app = express();
app.use(express.static('public'));
app.use(express.static(path.join(__dirname), { index: 'index.html' }));

app.set('port', process.env.PORT || 8080);

app.post('/get-models', async function (request, response) {
  let result = null;

  result = ''; //await db.loadModels(request.body);

  if (result instanceof Error) {
    response.status(400).json(result);
    return;
  } else {
    response.status(200).json(result);
    return;
  }
});

app.listen(app.get('port'), function () {
  console.log('server running', app.get('port'));
});
