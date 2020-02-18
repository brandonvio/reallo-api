const aws = require("aws-sdk");
const mime = require("mime-types");
const { AWS_ACCEESS_ID, AWS_SECRET_ACCESS_KEY } = process.env;

const s3service = {};

s3service.getPresignedUrl = async (property_id, file_name) => {
  aws.config.update({
    region: "us-west-2",
    accessKeyId: AWS_ACCEESS_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  });

  const s3 = new aws.S3();
  const mimeType = mime.lookup(file_name);

  const url = await s3.getSignedUrl("putObject", {
    Bucket: "re-demo-images",
    Key: `property-${property_id}-${file_name}`,
    ContentType: mimeType,
    ACL: "public-read",
    Expires: 300
  });

  return url;
};

module.exports = s3service;
