const db = require("./db");

module.exports =  deleteOrphanage;


function deleteOrphanage(db, {id}){
console.log(id)
    return db.run(`DELETE from orphanages WHERE id=${id}`)


}