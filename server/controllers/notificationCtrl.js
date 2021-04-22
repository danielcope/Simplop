module.exports = {
  getNotification: async (req, res) => {
    const db = req.app.get('db');
    const { parent_id } = req.params;

    const notifications = await db.notification.getNotification(parent_id)

    res.status(200).send(notifications)
  },
  
  
  addNotification: async (req, res) => {
    const db = req.app.get('db');
    const { parent_id,notification_hour,notification_min,am_pm} = req.body;
    
    await db.notification.addNotification(parent_id,notification_hour,notification_min,am_pm);

    res.sendStatus(200);
  },
  
  deleteNotification: async (req,res) => {
    const db = req.app.get('db');
    const { notification_id } = req.params;

    await db.notification.delete_notification(notification_id)

    res.sendStatus(200)
  }
  }