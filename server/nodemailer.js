const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    auth: {
      user: 'simplop.rawr@gmail.com',
      pass: 'This.is.a.password98'
    }
})

const option = {
  from: 'simplop.rawr@gmail.com'
}