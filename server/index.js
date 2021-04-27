require('dotenv').config();
const path = require('path');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authCtrl');
const kidCtrl = require('./controllers/kidCtrl');
const eventCtrl = require('./controllers/eventCtrl');
const notificationCtrl = require('./controllers/notificationCtrl');
const app = express();
const nodemailer = require('nodemailer');
const { EMAIL_PASSWORD,FEEDBACK_PASSWORD } = process.env;
const { SERVER_PORT,CONNECTION_STRING,SESSION_SECRET } = process.env;

app.use(express.json());

app.use(express.static(`${__dirname}/../build`))




// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../build/index.html'))
// })

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
app.get( '/api/kid', kidCtrl.getKid )
app.post ( '/api/kid', kidCtrl.addKid ) 
app.put ( '/api/kid/:kid_id', kidCtrl.editName )
app.delete ( '/api/kid/:kid_id', kidCtrl.deleteKid )

//EVENT endpoints
app.get( '/api/event/:id', eventCtrl.getEvent )
app.post( '/api/event', eventCtrl.addEvent )
app.delete( '/api/event/:event_id', eventCtrl.deleteEvent )

// Notification endpoints
app.get ( '/api/notification/:parent_id', notificationCtrl.getNotification )
app.post( '/api/notification', notificationCtrl.addNotification )
app.delete( '/api/notification/:notification_id', notificationCtrl.deleteNotification )

// Nodemailer
app.post( '/send', function(req,res,next) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'simplop.rawr@gmail.com',
      pass:  EMAIL_PASSWORD
    }
  })
  
  const option = {
    from: 'simplop.rawr@gmail.com',
    to: `${req.body.email}`,
    subject: 'Thank you for the feedback!',
    text:'Thank you so much for the feedback. We will do our best to implement any crucial changes'
  }
  
  transporter.sendMail(option, function(err) {
    if(err) {
      console.log('Email Error')
    } else {
      console.log('Email Sent')
    }
  })
})

app.post( '/api/sendemail', function (req,res,next) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'simplop.rawr@gmail.com',
      pass:  EMAIL_PASSWORD
    }
  })
  
  const option = {
    from: 'simplop.rawr@gmail.com',
    to: 'simplop.feedback@gmail.com',
    subject: `Simplop Feedback from ${req.body.email}`,
    text: `${req.body.emailText}`
  }
  
  transporter.sendMail(option, function(err) {
    if(err) {
      console.log('Email Error')
    } else {
      console.log('Feedback Sent')
    }
  })
})


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