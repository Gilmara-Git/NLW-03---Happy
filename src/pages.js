const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");
const updateOrphanage = require("./database/updateOrphanage")
const deleteOrphanage = require("./database/deleteOrphanage")

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanages(req, res) {
    try {
      const db = await Database; // This is a way without doing Database.then(db => {})
      const orphanages = await db.all(`SELECT * FROM orphanages`);
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },

  async orphanage(req, res) {
    const { id } = req.query;
    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages WHERE id=${id}`);
      const orphanage = results[0];

      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      
      orphanage.open_on_weekends = orphanage.open_on_weekends == "1" ? true : false;
      console.log(orphanage.open_on_weekends)

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Erro de banco de dados");
    }
  },
  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;
    //console.log(fields)
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos.");
    }

    try {
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images,
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      return res.send("Erro de banco de dados");
    }
  },

  async listOrphanages(req, res) {

    try {

      const db = await Database;
      const orphanages = await db.all('SELECT * FROM orphanages')
      console.log(orphanages)
      return res.render("list-orphanages", {orphanages})
      
    } catch (error) {
      console.log(error)
      return res.send("Erro de bando de dados.")
    }

    
  },

 async editOrphanage(req, res) {

    const {id} = req.params;
    console.log(id)
    
    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages WHERE id=${id}`)
      const orphanage = results[0]
      orphanage.images = orphanage.images.split(",")
      orphanage.open_on_weekends = orphanage.open_on_weekends == 1 ? true: false; 

      //console.log(orphanage.open_on_weekends)
      return res.render("edit-orphanage", {orphanage})

    } catch (error) {
      console.log(error)
      return res.send('Erro banco de dados')
    }
   
  }, 

  async put(req, res) {
    
    //const fields =  req.body;
    //console.log(req.body)
    
    if(Object.values(req.body).includes("")) {
         return res.send("Por favor preencha todos os dados.")
        }

        try {

          const db = await Database;
          const results = await updateOrphanage(db, {
                      id: req.body.id, 
                      lat: req.body.lat,
                      lng: req.body.lng,
                      name: req.body.name,
                      about: req.body.about,
                      whatsapp: req.body.whatsapp,
                      images: req.body.images,
                      instructions: req.body.instructions,
                      opening_hours: req.body.opening_hours,
                      open_on_weekends: req.body.open_on_weekends,
                     })                    
          
                     //console.log(results)
          return res.redirect("/orphanage")

        } catch (error) {
          console.log(error)
          return res.send("Erro de banco de dados")
        }
        
  },

 async delete(req, res) { //
    id =  req.body.id
    console.log(id)
    try {

      const db = await Database;
      await deleteOrphanage(db, req.body.id)
    
      return res.redirect("orphanages")
      
    } catch (error) {

      console.log(error)
      return res.send("Erro de banco. ")
      
    }
    
    
  }

}
