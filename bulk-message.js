const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hey, Partik! How you doing? I heard you are planning for a meet-up with your love!!! ;) ;)',
        messagingServiceSid: 'MG3b2e919b1ef67c8abce7438bd6d89374',
        to: '+917231854995'
    })
    .then(message => console.log(message))
    .done();