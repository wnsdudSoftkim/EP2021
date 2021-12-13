# Ch04 Basic Authentication

## Add(Sign up) User with aws cli

<pre>
aws cognito-idp sign-up --profile fullstack \
  --region ap-northeast-2 \
  --client-id 21s0qlnh1pvomojuo2qeaekr1u \
  --username admin \
  --password Passw0rd! \
  --user-attributes Name="email",Value="admin@example.com"

aws cognito-idp admin-confirm-sign-up --profile fullstack \
  --region ap-northeast-2 \
  --user-pool-id ap-northeast-2_RRfpYv0Kp \
  --username admin
</pre>
