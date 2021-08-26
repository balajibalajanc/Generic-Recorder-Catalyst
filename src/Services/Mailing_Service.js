
const sgMail=require('@sendgrid/mail')

const sendResults=(mail_id,subject_d,url_link)=>{
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: mail_id, // Change to your recipient
  from: 'balajibalasubramanijanci@gmail.com', // Change to your verified sender
  subject: subject_d,
  text: url_link,
  html: url_link,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}
module.exports=sendResults

