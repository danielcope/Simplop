require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session')
const authCtrl = require('./controllers/authCtrl')
const kidCtrl = require('./controllers/kidCtrl')
const eventCtrl = require('./controllers/eventCtrl')
const notificationCtrl = require('./controllers/notificationCtrl')
const app = express();

const { SERVER_PORT,CONNECTION_STRING,SESSION_SECRET } = process.env;

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
  }))

//-------------Endpoints------------------
// AUTH endpoints
app.get( '/auth/parent', authCtrl.getUser )
app.post( '/auth/register', authCtrl.register )
app.post( '/auth/login', authCtrl.login )
app.delete( '/auth/logout', authCtrl.logout )

// KID endpoints
app.get( '/api/kid/:username', kidCtrl.getKid )
app.post ( '/api/kid', kidCtrl.addKid ) 
app.put ( '/api/kid/:kid_id', kidCtrl.editName )
app.delete ( '/api/kid/:kid_id', kidCtrl.deleteKid )

//EVENT endpoints
app.get( '/api/event', eventCtrl.getEvent )
app.post( '/api/event', eventCtrl.addEvent )
app.put( '/api/event/:event_id', eventCtrl.editEvent )
app.delete( '/api/event/:event_id', eventCtrl.deleteEvent )

// Notification endpoints
app.get ( '/api/notification', notificationCtrl.getNotification )
app.put( '/api/notification/:notification_id', notificationCtrl.editNotification )
app.post( '/api/notification', notificationCtrl.addNotification )
app.delete( '/api/notification/:notification_id', notificationCtrl.deleteNotification )


//-------------------------------------------

massive ({
    connectionString: CONNECTION_STRING,
    ssl:{
      rejectUnauthorized:false
    }
  })
    .then(dbInst => {
      app.set('db',dbInst)
        
      app.listen(SERVER_PORT,() => console.log(`Server running on port` + ' ' + SERVER_PORT))
    })
    .catch(err => console.log(err))