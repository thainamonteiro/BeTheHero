const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rota / Recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar informações no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de paramêtros:
   * 
   * Query: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
   * Route Params: Paramêtros utilizados para identificar recursos. 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where
     */

