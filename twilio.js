const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// client.verify.services.create({friendlyName: 'Spate-Assam'})
//                       .then(service => console.log(service.sid));

// client.verify.services('VA379dbd66e315b35949728231296f0f32')
//              .verifications
//              .create({to: '+919365698129', channel: 'sms'})
//              .then(verification => console.log(verification));

client.verify.services(process.env.TWILIO_SERVICE_ID)
      .verificationChecks
      .create({to: '+919365698129', code: '647651'})
      .then(verification_check => console.log(verification_check));