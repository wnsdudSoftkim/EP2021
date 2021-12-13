# Ch10 Build

$ npx create-react-app ch10-photo-app

$ cd ch10-photo-app

$ yarn add antd uuid aws-amplify @aws-amplify/ui-react@1.2.25

$ amplify init

$ amplify add auth
Using service: Cognito, provided by: awscloudformation
Do you want to use the default authentication and security configuration? Default configuration
Warning: you will not be able to edit these selections.
How do you want users to be able to sign in? Username
Do you want to configure advanced settings? No, I am done.

$ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: ch10photoapp
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)
Edit your schema at /home/cskim/git-repo/EP2021/FullStack/ch10-photo-app/amplify/backend/api/ch10photoapp/schema.graphql or place .graphql files in a directory at /home/cskim/git-repo/EP2021/FullStack/ch10-photo-app/amplify/backend/api/ch10photoapp/schema
? Do you want to edit the schema now? Yes
? Choose your default editor: Visual Studio Code
[Edit]
type Post @model {
id: ID!
title: String!
imageKey: String!
}
[Save]

$ amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the project: ch10photos
? Please provide bucket name: ch10photos
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? create/update, read, delete
? Do you want to add a Lambda Trigger for your S3 Bucket? No

$ amplify push --y

## Build Frontend (Client-side App)

Edit index.js App.js CreatePost.js Posts.js

## Add User

aws cognito-idp sign-up --profile fullstack \
 --region ap-northeast-2 \
 --client-id 7nnkbshbkoalmv1uv3glfv0vhj \
 --username admin \
 --password Passw0rd! \
 --user-attributes Name="email",Value="admin@example.com"

aws cognito-idp admin-confirm-sign-up --profile fullstack \
 --region ap-northeast-2 \
 --user-pool-id ap-northeast-2_3LZtXlUQ7 \
 --username admin

$ yarn start
