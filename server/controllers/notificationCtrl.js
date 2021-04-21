

module.exports = {
  getNotification: async (req, res) => {
    const db = req.app.get('db');
    const { parent_id } = req.params;
    console.log(parent_id);
    const notifications = await db.notification.getNotification(parent_id)

    res.status(200).send(notifications)
  },
            
    
  addNotification: async (req, res) => {
     
  },

  editNotification: async (req,res) => {
      
  },

  deleteNotification: async (req,res) => {

  }
  }