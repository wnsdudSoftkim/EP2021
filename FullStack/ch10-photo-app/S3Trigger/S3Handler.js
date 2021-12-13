const stream = require('stream');
const aws = require('aws-sdk');

const S3 = new aws.S3();

class S3Handler {
  constructor() {}

  readStream({ Bucket, Key }) {
    return S3.getObject({ Bucket, Key }).createReadStream();
  }

  writeStream({ Bucket, Key }) {
    const passThrough = new stream.PassThrough();
    return {
      writeStream: passThrough,
      uploaded: S3.upload({
        ContentType: 'image/png',
        Body: passThrough,
        Bucket,
        Key,
      }).promise(),
    };
  }
}

module.exports = S3Handler;
