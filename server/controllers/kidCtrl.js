

module.exports = {
  getKid: async (req, res) => {
    const db = req.app.get('db');
    const { username } = req.session.user

    const kids = await db.kid.get_kid(username)

    res.status(200).send(kids)
  },
            
    
  addKid: async (req, res) => {
    const db = req.app.get('db')
    const {parent_id} = req.session.user;
    const { kidName } = req.body;

    await db.kid.add_kid( kidName, parent_id )

    res.sendStatus(200);
  },

  editName: async (req,res) => {
    const db = req.app.get('db');
    const { newName } = req.body;
    const { kid_id } = req.params;

    await db.kid.edit_kid( kid_id,newName )

    res.sendStatus(200);
  },

  deleteKid: async (req,res) => {
    const db = req.app.get('db');
    const { kid_id } = req.params;

    await db.kid.delete_kid(kid_id)

    res.sendStatus(200);
  }
  }