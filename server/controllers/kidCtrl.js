

module.exports = {
  getKid: async (req, res) => {
    const db = req.app.get('db');
    const { username } = req.body

    const kids = await db.kid.getKid(username)

    res.status(200).send(kids)

  },
            
    
  addKid: async (req, res) => {
     
  },

  editName: async (req,res) => {
      
  },

  deleteKid: async (req,res) => {

  }
  }