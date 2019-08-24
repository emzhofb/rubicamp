const multer = require('multer');
const Ecommerce = require('../models/ecommerce');
const Image = require('../models/image');

exports.getEcommerce = (req, res, next) => {
  const error = e => {
    throw e;
  };

  Ecommerce.find()
    .then(products => {
      if (products) {
        return res.status(200).json(products);
      }

      error("products can't be found!");
    })
    .catch(err => {
      return res.status(406).json({ message: err });
    });
};

exports.postEcommerce = (req, res, next) => {
  const {
    title,
    rate,
    description,
    price,
    brand,
    detail_product,
    image
  } = req.body;
  const ecommerce = new Ecommerce({
    title,
    rate,
    description,
    price,
    brand,
    detail_product,
    image
  });

  ecommerce
    .save()
    .then(() => {
      return res.status(200).json({
        status: 'SUCCESS',
        data: {
          title,
          rate,
          description,
          price,
          brand,
          detail_product,
          image
        }
      });
    })
    .catch(err => res.status(406).json({ message: "can't add product" }));
};

const storage = multer.diskStorage({
  destination: function(request, file, cb) {
    cb(null, './public/images');
  },
  filename: function(request, file, cb) {
    cb(null, 'IMG-' + Date.now() + '.jpg');
  }
});
const upload = multer({ storage: storage }).single('image');

exports.postImage = (req, res, next) => {
  const error = e => {
    throw e;
  };
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      error(err);
    } else if (err) {
      // An unknown error occurred when uploading.
      error(err);
    }

    // Everything went fine.
    const imagePath = req.file.filename;
    const image = new Image({ image: imagePath });
    image
      .save()
      .then(() => res.status(200).json({ image: imagePath }))
      .catch(err => res.status(402).json({ message: err }));
  });
};
