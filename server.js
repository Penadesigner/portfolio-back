const http = require('http');
const app = require('./app');
require("./config/migrate"); // Descomente para criar todos as tabelas do banco

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);