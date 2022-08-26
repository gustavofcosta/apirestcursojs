"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-console */
/* eslint-disable quotes */
// eslint-disable-next-line import/extensions
var _appjs = require('./app.js'); var _appjs2 = _interopRequireDefault(_appjs);

const port = process.env.APP_PORT;

// Produção
_appjs2.default.listen(port);

/* Desenvolvimento
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
*/
