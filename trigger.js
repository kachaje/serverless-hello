const AWS = require("aws-sdk");

const lambda = new AWS.Lambda({
  endpoint: "http://127.0.0.1:3002",
  region: "us-east-1",
});

lambda.invoke(
  {
    FunctionName: "HelloWorldFunction",
    Payload: JSON.stringify({ word: "hello" }, null, 2),
    InvocationType: "RequestResponse",
  },
  (err, res) => {
    if (err) console.log(err);
    else console.log(res);
  }
);
