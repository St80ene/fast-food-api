let cloudinary = require('cloudinary').v2;
// import Datauri from 'datauri';
// import path from 'path';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// const dUri = new Datauri();
// const dataUri = (req) =>
//   dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

// const file = dataUri(req).content;

export const fileUpload = (file, callback) => {
  cloudinary.uploader.upload_stream(file, function (error, result) {
    callback(error, result);
  });
};
