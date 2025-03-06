/* import database from "../../../../infra/database";

function status(request, response) {
  console.log(database);
  response.status(200).json({ chave: "são acima da média" });
}

export default status; */

import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1  + 1");
  console.log(result.rows);
  response.status(200).json({ chave: "são acima da média" });
}

export default status;

/* function status(request, response) {
  response.status(200).json({ chave: "valor" });
}

export default status; */
