# Ch02 Build

<pre>
$ npx create-react-app ch02-app
$ cd ch02-app
$ yarn add aws-amplify

$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project <b>ch02app</b>
The following configuration will be applied:

Project information
| Name: ch02app
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? <b>Yes</b>
Using default provider  awscloudformation
? Select the authentication method you want to use: <b>AWS profile</b>

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use <b>fullstack</b>
⠧ Initializing project in the cloud...
...
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.
...
$ amplify add function? Select which capability you want to add: <b>Lambda function (serverless function)</b>
? Provide an AWS Lambda function name: <b>cryptofunction</b>
? Choose the runtime that you want to use: <b>NodeJS</b>
? Choose the function template that you want to use: <b>Hello World</b>

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration
- Environment variables configuration
- Secret values configuration

? Do you want to configure advanced settings? <b>No</b>
? Do you want to edit the local lambda function now? <b>No</b>
Successfully added resource cryptofunction locally.
...
$ amplify remove function
? Choose the resource you would want to remove <b>cryptofunction (function)</b>

? Are you sure you want to delete the resource? This action deletes all files related 
to this resource from the backend directory. <b>Yes</b>
Successfully removed resource

$ amplify add function
? Select which capability you want to add: <b>Lambda function (serverless function)</b>
? Provide an AWS Lambda function name: <b>cryptofunction</b>
? Choose the runtime that you want to use: <b>NodeJS</b>
? Choose the function template that you want to use: <b>Serverless ExpressJS function (Integration with API Gateway)</b>

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration
- Environment variables configuration
- Secret values configuration

? Do you want to configure advanced settings? <b>No</b>
? Do you want to edit the local lambda function now? <b>No</b>
Successfully added resource cryptofunction locally.
...

$ amplify add api
? Please select from one of the below mentioned services: <b>REST</b>
? Provide a friendly name for your resource to be used as a label for this category in
 the project: <b>cryptoapi</b>
? Provide a path (e.g., /book/{isbn}): <b>/coins</b>
? Choose a Lambda source Use <b>a Lambda function already added in the current Amplify project</b>
? Choose the Lambda function to invoke by this path <b>cryptofunction</b>
? Restrict API access <b>No</b>
? Do you want to add another path? <b>No</b>
Successfully added resource cryptoapi locally
...

$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬────────────────┬───────────┬───────────────────┐
│ Category │ Resource name  │ Operation │ Provider plugin   │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Function │ cryptofunction │ Create    │ awscloudformation │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Api      │ cryptoapi      │ Create    │ awscloudformation │
└──────────┴────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? <b>Yes</b>
⠋ Updating resources in the cloud. This may take a few minutes...App not deployed yet.
⠏ Updating resources in the cloud. This may take a few minutes...
...
✔ All resources are updated in the cloud

REST API endpoint: https://zencqtlt6k.execute-api.ap-northeast-2.amazonaws.com/dev

</pre>

## Install axios on backend

```
$ cd amplify/backend/function/cryptofunction/src
$ npm install axios
```

## Update function at

## amplify/backend/function/cryptofunction/src/app.js

```
const axios = require('axios');
...
app.get('/coins', function (req, res) {
  // Define base url
  let apiUrl = `https://api.coinlore.com/api/tickers?start=0&limit=10`;
  // Check if there are any query string parameters
  // If so, reset the base url to include them
  if (req.apiGateway && req.apiGateway.event.queryStringParameters) {
    const { start = 0, limit = 10 } =
      req.apiGateway.event.queryStringParameters;
    apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`;
  }
  // Call API and return response
  axios
    .get(apiUrl)
    .then((response) => {
      res.json({ coins: response.data.data });
    })
    .catch((err) => res.json({ error: err }));
});
```

<pre>
$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬────────────────┬───────────┬───────────────────┐
│ Category │ Resource name  │ Operation │ Provider plugin   │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Function │ cryptofunction │ Update    │ awscloudformation │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Api      │ cryptoapi      │ No Change │ awscloudformation │
└──────────┴────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? <b>Yes</b>
⠋ Updating resources in the cloud. This may take a few minutes...App not deployed yet.
⠹ Updating resources in the cloud. This may take a few minutes...
...
✔ All resources are updated in the cloud

$ yarn start
</pre>
