var app = require('express')();
app.use(require('cors')());
app.use(require('body-parser').urlencoded({ extended: true }));

function sendJSON(res, data) {
  res.setHeader('Authorization', 'DEVELOPER_ACCESS_TOKEN');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

app.post('/echo', function(req, res) {
  console.log('req.params', req.params);
  console.log('req.query', req.query);
  console.log('req.body', req.body);
  sendJSON(res, {});
});

['/bom', '/nav']
.forEach(function(uri) {
  app.use(uri, function(req, res) {
    sendJSON(res, require('.' + uri));
  });
});

app.use('/mst', function(req, res) {
  sendJSON(res, {
    specs: require('./specs'),
    materials: require('./materials'),
    material_attrs: require('./material_attrs')
  });
});

var port = 3001;
app.listen(port, function() {
  console.log('Serving at http://localhost:%s', port);
});
