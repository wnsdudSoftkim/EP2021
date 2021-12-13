// eslint-disable-next-line
const sharp = require('sharp');
const aws = require('aws-sdk');
const s3 = new aws.S3();

const S3Handler = require('./S3Handler');
const s3Handler = new S3Handler();

const sizeList = ['1200x900', '1200x800', '1000x', '512x512', '800x1200'];

const resizeS3Image = async (size, imageKey, s3Bucket) => {
  try {
    const sizeArray = size.split('x');
    const width = parseInt(sizeArray[0]);
    const height = sizeArray[1] ? parseInt(sizeArray[1]) : null;
    const keyParts = imageKey.split('/');
    const fileName = keyParts[1].split('.')[0];
    const newKey = `public/${size}/${fileName}.png`;
    console.log('newKey, width, height=', newKey, width, height);

    const streamResize = sharp().resize(width, height).toFormat('png');
    const readStream = s3Handler.readStream({
      Bucket: s3Bucket,
      Key: imageKey,
    });
    const { writeStream, uploaded } = s3Handler.writeStream({
      Bucket: s3Bucket,
      Key: newKey,
    });
    //data streaming
    readStream.pipe(streamResize).pipe(writeStream);
    const res = await uploaded;

    console.log('resizeS3Image res=', res);
    return newKey;
  } catch (error) {
    throw new Error(error);
  }
};

exports.handler = async function (event, context) {
  //eslint-disable-line
  // If the event type is delete, return from the function
  if (event.Records[0].eventName === 'ObjectRemoved:Delete') return;

  // Next, we get the bucket name and the key from the event.
  const eventName = event.Records[0].eventName;
  const s3Bucket = event.Records[0].s3.bucket.name;
  let imageKey = event.Records[0].s3.object.key;
  console.log('Trigger Event=', { eventName, s3Bucket, imageKey });
  const keyParts = imageKey.split('/');
  console.log('keyParts=', keyParts);
  if (keyParts.length > 2) return; // ignore in case of sub dir insert

  try {
    const newKeys = await Promise.all(
      sizeList.map(async (size) => {
        const newKey = await resizeS3Image(size, imageKey, s3Bucket);

        return newKey;
      })
    );
    console.log('After resizeS3Image newKeys = ', newKeys);
  } catch (err) {
    context.fail(`Error getting files: ${err}`);
  }
};
