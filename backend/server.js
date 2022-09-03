const express = require("express");
const body_parser = require("body-parser");
//create server
const server = express();

//router
const mainRouter = require("./Routers/mainRouter");

const cors = require("cors")


//listen to port number
server.listen(process.env.PORT || 8000, () => {
    console.log("server listening...")
});

//cors
server.use(cors());

//Middlewares 
//logging middleware
server.use((request, response, next) => {
    console.log(request.url, request.method)
    next();
});

//body parsing mw
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: false }));

//main router
server.use(mainRouter)

//not found middleware
server.use((request, response) => {
    response.status(404).json({ message: "Page not found " })
});

//Error middleware
server.use((error, request, response, next) => {
    response.status(500).json({ message: error + "" })
});