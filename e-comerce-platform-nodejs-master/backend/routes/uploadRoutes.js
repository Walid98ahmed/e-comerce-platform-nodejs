const express = require('express');
const path = require('path');
const multer = require ('multer');
const router = express.Router();
const Upload = require('../models/uploadModel');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  file(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

// function checkFileType(file, cb) {
//   const fileTypes = /jpg|jpeg|png/
//   const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
//   const mimeType = fileTypes.test(file.mimeType)

//   if (extname && mimeType) {
//     return cb(null, true)
//   } else {
//     cb('Images only!')
//   }
// }

const upload = multer({
  storage: storage,
  // fileFilter: function (req, file, cb) {
  //   checkFileType(file, cb)
  // },

  // single method takes fileName 
}).single('image');   

// router.post('/', upload.single('image'), (req, res) => {
router.post('/', (req, res) => {
  // res.send(`/${req.file.path}`)
  upload(req, res, (err) => {
    if(err) {
      console.log(err)

    } else {
      const newImage =  new Upload ({

        name: req.body.name, 

        image: {

          data: req.file.filename,
          contentType: "image/png",

        },
      });

      newImage.save().then( () =>
        res.send('Uploaded Successfully!!!'))
        .catch( (err) => console.log(err))
       
      }
    })
  });

module.exports = router;