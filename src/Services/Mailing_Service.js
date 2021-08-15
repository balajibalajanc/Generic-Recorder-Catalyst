
const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'harsniks@gmail.com', // Change to your recipient
  from: 'balajibalasubramanijanci@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'connected with mailing service api d buska....api part done',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

// module.exports={
//     sendResults
// }
