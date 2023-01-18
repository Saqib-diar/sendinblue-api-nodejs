const Sib = require("sib-api-v3-sdk");
require("dotenv").config();
const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

const tranEmailApi = new Sib.TransactionalEmailsApi();

const sender = {
  email: "saqib.diar@productbox.dev",
};
const receivers = [
  {
    email: "saqibdiar.uet@gmail.com",
  },
];
console.log(tranEmailApi);
tranEmailApi
  .sendTransacEmail({
    sender,
    to: receivers,
    subject: "SAQIASKS",
    textContent: `
    Welcome to my channel! Here you'll find a variety of entertaining content that's sure to keep you entertained
        `,
    htmlContent: `
        <h1>Youtuber || NodeJs Developer</h1>
        <a https://www.youtube.com/channel/UCz9VmhvYRAaT-GQQh1qNHiw">Visit</a>
                `,
  })
  .then(console.log)
  .catch("error", console.log);
