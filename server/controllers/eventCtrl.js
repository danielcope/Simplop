module.exports = {
  getEvent: async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params

    const event = await db.event.get_event(id)

    res.status(200).send(event)
  },
  
  addEvent: async (req, res) => {
    const db = req.app.get('db');
    const {kid_id,type,hour,min,am_pm,month,day} = req.body

    await db.event.add_event(kid_id,type,hour,min,am_pm,month,day);

    res.sendStatus(200);
  },

  deleteEvent: async (req,res) => {
    const db = req.app.get('db');
    const { event_id } = req.params;

    await db.event.delete_event(event_id)

    res.sendStatus(200);
  }
}