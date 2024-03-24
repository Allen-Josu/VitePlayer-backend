// import json server library
const Server = require("json-server");
// create server using create function

const vitePlayerServer = Server.create();

// create path for database.json file

const router = Server.router("database.json");

// Create a middleware to convert json into js

const middleware = Server.defaults();

// connect middleware and server

vitePlayerServer.use(middleware);
vitePlayerServer.use(router);

//setup port for server

const port = 4000 || process.env.PORT;

// Run the server

vitePlayerServer.listen(port, () => {
    console.log(`The server is running successfully at port ${port}`);
});

