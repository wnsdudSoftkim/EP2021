# ch06 build

<pre>
$ npx create-react-app ch06-lamda-1
$ cd ch06-lamda-1
$ yarn add aws-amplify @aws-amplify/ui-react uuid
$ amplify init

$ amplify add auth
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? <b>Default configuration</b>
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? <b>Username</b>
 Do you want to configure advanced settings? <b>Yes, I want to make some additional changes.</b>
 Warning: you will not be able to edit these selections. 
 What attributes are required for signing up? <b>Email</b>
 Do you want to enable any of the following capabilities? <b>Add User to Group</b>
? Enter the name of the group to which users will be added. <b>Admin</b>
Successfully added resource ch06lamda1b5f95b20PostConfirmation locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/ch06lamda1b5f95b20PostConfirmation/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the /home/cskim/git-repo/EP2021/FullStack/ch06-lamda-1/amplify/backend/function/ch06lamda1b5f95b20PostConfirmation/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Successfully added the Lambda function locally
? Do you want to edit your add-to-group function now? <b>Yes</b>
? Choose your default editor: <b>Visual Studio Code</b>
Edit the file in your editor: /home/cskim/git-repo/EP2021/FullStack/ch06-lamda-1/amplify/backend/function/ch06lamda1b5f95b20PostConfirmation/src/add-to-group.js
? Press enter to continue 
Successfully added auth resource ch06lamda1b5f95b20 locally

$ amplify push

</pre>

Add Admin Group to Cognito User-pool(aws_user_pools_id": "ap-northeast-2_Bhk7zJh1t)

<pre>
aws cognito-idp sign-up --profile fullstack \
  --region ap-northeast-2 \
  --client-id 1v9ucivocc1k540j6ba3r6ajl9 \
  --username admin \
  --password Passw0rd! \
  --user-attributes Name="email",Value="admin@example.com"

aws cognito-idp admin-confirm-sign-up --profile fullstack \
  --region ap-northeast-2 \
  --user-pool-id ap-northeast-2_Bhk7zJh1t \
  --username admin
</pre>

\*\*\* Error -- Attempted import error: 'AmplifySignOut' is not exported from '@aws-amplify/ui-react'  
To Solve the problem -- Downgrade @aws-amplify/ui-react --> @1.2.25

<pre>
$ yarn add @aws-amplify/ui-react@1.2.25

$ amplify add storage
? Please select from one of the below mentioned services: Content
? Please provide a friendly name for your resource that will be used to label
this category in the project: ch06lamdas3 
? Please provide bucket name: ch06lamda1e832bc2ae148464b8c92bf4b4e1527eb
? Who should have access: Auth and Guest users
? What kind of access do you want for Authenticated users? Choose all
(create / update, read, & delete)
? What kind of access do you want for Guest users? Choose all
(create / update, read, & delete)
? Do you want to add a Lambda Trigger for your S3 Bucket? Y
? Select from the following options: Create a new function
? Do you want to edit the local S3Trigger18399e19 lambda function now? Y

$ amplify push




</pre>
