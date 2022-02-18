const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

const sendTwilio = (message) => {
client.messages
      .create({
         body: message || 'Thank you for choosing FüBer Feasts. Your order code #409759. If you have any problems, please direct them to LHL.',
        from: `whatsapp:+${process.env.TWILIO_PHONE}`,
        to: `whatsapp:+${process.env.TWILIO_TJ}`
       })
      .then(message => console.log('twilio sent: ', message.sid))
      .catch(error => console.log('twilio error: ', error))
      .done();
};

module.exports = sendTwilio;
