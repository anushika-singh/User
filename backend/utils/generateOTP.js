const nodemailer = require('nodemailer');
//here
exports.generateOTP = () => {
  for(let i=0; i<=3; i++){
    const randVal = Math.round(Math.random()*9);
    otp=otp+randVal;
  }
  return otp;
}
//here

exports.mailTransport = () => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD
        }
      });
      return transport;
}