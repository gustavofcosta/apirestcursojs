/* eslint-disable no-console */
/* eslint-disable quotes */
// eslint-disable-next-line import/extensions
import app from "./app.js";

const port = process.env.APP_PORT;

// Produção
app.listen(port);

/* Desenvolvimento
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
*/
