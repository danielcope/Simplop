require('dotenv').config();


transporter.sendMail(option, function(err,data) {
  if(err) {
    console.log('Error', err)
  } else {
    console.log('Email sent')
  }
})