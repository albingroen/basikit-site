const fs = require("fs");

exports.handler = async function (event, context, callback) {
  fs.appendFile(
    "functions/subscribe-to-newsletter/contacts.txt",
    JSON.parse(event.body).email + "\n",
    (err) => {
      if (err) {
        throw err;
      }
    }
  );

  callback(null, {
    statusCode: 200,
    body: "Successfully subscribed to newsletter!",
  });
};
