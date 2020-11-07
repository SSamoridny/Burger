const express = require('express')
const app = express() 
const exphbs = require("express-handlebars");
const burger = require( './controllers/burgers_controller.js' );

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(burger);


// SERVER-SIDE RENDERING ====================================
// Serve index.handlebars to the root route.


// get the unhandled rejection and throw it to another fallback handler we already have. 
process.on('uncaughtException', function (error){
  console.log( `unCaught exception: `, error )
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log( `Server listening on: http://localhost:${PORT}` );
});