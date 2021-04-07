// const bcrypt = require('bcryptjs');
  
module.exports = {
  register: async (req, res) => {
     
      },
            
    
    login: async (req, res) => {
     
    },

    logout: async (req,res) => {
      req.session.destroy()
      return res.sendStatus(200)
    }
  }