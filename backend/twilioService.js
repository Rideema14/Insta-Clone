// twilioService.js
const twilio = require('twilio');

const accountSid = 'AC5533cd9e957e77aac1276c0b2f75cb83'; // Your Account SID from Twilio Console
const authToken = '00142a665f90bc25167df3dcad1e0251';   // Your Auth Token from Twilio Console

const client = new twilio(accountSid, authToken);

const sendOtp = (phoneNumber, otp) => {
  return client.messages.create({
    body: `Your OTP is ${otp}`,  // The message content
    from: '+1 762 667 2510', // Your Twilio Phone Number
    to: phoneNumber                // Recipient's Phone Number
  });
};

module.exports = sendOtp;



