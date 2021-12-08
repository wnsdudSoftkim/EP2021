# Build Ch08 Festival App (AppSync)

<pre>
$ npx create-react-app ch08-festival
$ cd ch08-festival
$ yarn add aws-amplify antd @aws-amplify/ui-react@1.2.25 react-router-dom
</pre>

## Build Backend

<pre>
$ amplify init
$ amplify add auth
 Do you want to use the default authentication and security configuration? <b>Default configuration
 How do you want users to be able to sign in? <b>Username
 Do you want to configure advanced settings? <b>Yes, I want to make some additional changes.
 What attributes are required for signing up? <b>Email
 Do you want to enable any of the following capabilities? <b>Add User to Group
? Enter the name of the group to which users will be added. <b>Admin
Successfully added resource ch08festival2c9eab4fPostConfirmation locally.
? Do you want to edit your add-to-group function now? <b>Yes
? Choose your default editor: <b>Visual Studio Code
Edit the file in your editor: /home/cskim/git-repo/EP2021/FullStack/ch08-festival/amplify/backend/function/ch08festival2c9eab4fPostConfirmation/src/add-to-group.js
? Press enter to continue 
Successfully added auth resource ch08festival2c9eab4f locally

$ amplify add api
? Please select from one of the below mentioned services: <b>GraphQL
? Provide API name: <b>ch08festivalapi
? Choose the default authorization type for the API <b>Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API <b>Yes, I want to make some additi
onal changes.
? Configure additional auth types? <b>Yes
? Choose the additional authorization types you want to configure for the API <b>API key
API key configuration
? Enter a description for the API key: <b>public
? After how many days from now the API key should expire (1-365): <b>365
? Enable conflict detection? <b>No
? Do you have an annotated GraphQL schema? <b>No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

? Do you want to edit the schema now? <b>Yes
? Choose your default editor: <b>Visual Studio Code
Edit the file in your editor: /home/cskim/git-repo/EP2021/FullStack/ch08-festival/amplify/backend/api/ch08festivalapi/schema.graphql
Successfully added resource ch08festivalapi locally

$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬──────────────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name                        │ Operation │ Provider plugin   │
├──────────┼──────────────────────────────────────┼───────────┼───────────────────┤
│ Function │ ch08festival2c9eab4fPostConfirmation │ Create    │ awscloudformation │
├──────────┼──────────────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ ch08festival2c9eab4f                 │ Create    │ awscloudformation │
├──────────┼──────────────────────────────────────┼───────────┼───────────────────┤
│ Api      │ ch08festivalapi                      │ Create    │ awscloudformation │
└──────────┴──────────────────────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? <b>Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Stage
         - Performance
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

? Do you want to generate code for your newly created GraphQL API <b>Yes
? Choose the code generation language target <b>javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions <b>src/graphql/**/*.j
s
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscr
iptions <b>Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] <b>2

✔ All resources are updated in the cloud

GraphQL endpoint: https://sprbnq7r4ndijm2tvkulecjpmy.appsync-api.ap-northeast-2.amazonaws.com/graphql
GraphQL API KEY: da2-e37byjij2jbp3dvrqicindpugq

Add User

aws cognito-idp sign-up --profile fullstack \
  --region ap-northeast-2 \
  --client-id 5estf0cij1erhkdrmm1t7pn9m8 \
  --username admin \
  --password Passw0rd! \
  --user-attributes Name="email",Value="admin@example.com"

aws cognito-idp admin-confirm-sign-up --profile fullstack \
  --region ap-northeast-2 \
  --user-pool-id ap-northeast-2_PlP2lmYVV \
  --username admin
</pre>

graphql folder

## Build Frontend

Add new Component

- Container.js
- Footer.js
- Nav.js
- Admin.js
- Router.js
- Performance.js
- Home.js

Delete App.js  
Rename Router to App  
Edit App.js using new react-router-dom

```


$ yarn add @aws-amplify/ui-react@1.2.25
$ yarn start

```
