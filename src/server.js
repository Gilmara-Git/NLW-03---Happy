const express = require("express");
const server = express();
const path = require("path")
const pages = require("./pages.js")
const methodOverride =  require("method-override")

server.listen(5500)

server.use(express.static("public"))

// Configuring the path for the view engine, so we can return res.render
server.set("views", path.join(__dirname, "views"))
server.set("view engine", "hbs")
server.use(express.urlencoded({extended: true})) // get req.body
server.use(methodOverride("_method"))

server.get("/", pages.index)
server.get("/orphanage", pages.orphanage)
server.get("/orphanages", pages.orphanages)
server.get("/orphanage/:id/edit", pages.editOrphanage)
server.get("/list-orphanages", pages.listOrphanages)
server.get("/create-orphanage", pages.createOrphanage)
server.put("/orphanage", pages.put)
server.post("/save-orphanage", pages.saveOrphanage)
server.delete("/orphanage", pages.delete)

