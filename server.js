/* eslint-disable no-console */
/* eslint-disable quotes */
// eslint-disable-next-line import/extensions
import app from "./app.js";

const port = 3001;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
