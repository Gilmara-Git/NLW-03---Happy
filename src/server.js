const express = require("express");
const server = express();
const path = require("path")
const pages = require("./pages.js")

server.listen(5500)

server.use(express.static("public"))

// Configuring the path for the view engine, so we can return res.render
server.set("views", path.join(__dirname, "views"))
server.set("view engine", "hbs")

server.get("/", pages.index)
server.get("/orphanage", pages.orphanage)
server.get("/orphanages", pages.orphanages)
server.get("/create-orphanage", pages.createOrphanage)