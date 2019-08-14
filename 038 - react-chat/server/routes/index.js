const Chat = require('../models/chat');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  Chat.find({})
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
  const { name, message } = req.body;
  const chat = new Chat({ name, message });

  chat
    .save()
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
