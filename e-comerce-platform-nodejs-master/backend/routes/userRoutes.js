const express = require("express") ;
const {
        authUser,
        getUserProfile,
        registerUser,
        updateUserProfile,
        getUsers,
        deleteUser,
          getUserById,
          updateUser
            }  =   require("../controllers/userController") ;
      const { protect, admin } = require("../middleware/authMiddleware") ;

      const router = express.Router();

      router.route('/').post(registerUser).get(protect, admin, getUsers)
      router.post('/login', authUser)
      router
        .route('/profile')
        .get(protect, getUserProfile)
        .put(protect, updateUserProfile)
      router
        .route('/:id')
        .delete(protect, admin, deleteUser)
        .get(protect, admin, getUserById)
        .put(protect, admin, updateUser)


      module.exports =  router;
      
















      // const express = require("express");
      // const  {
      // 	authUser,
      // 	getUserProfile,
      // 	registerUser,
      // 	updateUserProfile,
      // } 
      //     = require("../controllers/userController");
      
      // const { protect } = require("../middleware/authMiddleware");
      
      
      // const mongoose  = require('mongoose');
      // const router = express.Router();
      // const multer = require('multer');
      
      
      // var storage = multer.diskStorage({
      //   destination:  (req, file, cb) => {
      //     cb(null,  "./uploads/");
      //   },
        
      //   file: (req, file, cb) => {
      //    return cb(null, new Date().toISOString() + file.originalname);
      //   }
      // });
      
      
      // const fileFilter = (req, file, cb) => {
      //   // reject a file
      //   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      //     cb(null, true);
      //   } else {
      //     cb(null, false);
      //   }  
      // };
      
      // var upload = multer({
      //   storage: storage,
      //   limits: {
      //     fileSize: 1024 * 1024 * 10
      //   },
      //   fileFilter: fileFilter
      // })
      
      
      
      
      // const User = require("../models/userModel");
      
      // router.get("/", (req, res, next) => {
      //   User.find()
      //     .select("name email password profile")
      //     .exec()
      //     .then(docs => {
      //       const response = {
      //         count: docs.length,
      //         users: docs.map(doc => {
      //           return {
      //             name: doc.name,
      //             email: doc.email,
      //             password: doc.password,
      //             profile: doc.profile,
      //             // _id: doc._id,
      //             request: {
      //               type: "GET",
      //               url: "http://localhost:4000/users/" + doc._id
      //             }
      //           };
      //         })
      //       };
      //       //   if (docs.length >= 0) {
      //       res.status(200).json(response);
      //       //   } else {
      //       //       res.status(404).json({
      //       //           message: 'No entries found'
      //       //       });
      //       //   }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       res.status(500).json({
      //         error: err
      //       });
      //     });
      // });
      
      // router.post("/", upload.single('profile'), (req, res) =>{
      
      //   console.log(req.body)
      //   console.log(req.file)
      
      //   const newUser =  new User({
      //     // _id: new mongoose.Types.ObjectId(),
      //     name: req.body.name,
      //     email: req.body.email,
      //     password: req.body.password,
      //     profile:  req.file.path,
      
      //   });
      //   newUser
      //     .save()
      //     .then(result => {
      //       console.log(result);
      //       res.status(201).json({
      //         message: "Created user successfully",
      //         createduser: {
      //           name: result.name,
      //           email: result.email,
      //           password: result.password,
      //           profile: result.profile,
      //           _id: result._id,
      //             request: {
      //                 type: 'POST',
      //                 url: "http://localhost:3000/" + result.profile
      //             }
      //         }
      //       });
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       res.status(500).json({
      //         error: err
      //       });
      //     });
      // });
      
      // router.get("/:userId", (req, res, next) => {
      //   const id = req.params.userId;
      //   User.findById(id)
      //     .select('name email password _id userImage')
      //     .exec()
      //     .then(doc => {
      //       console.log("require database", doc);
      //       if (doc) {
      //         res.status(200).json({
      //             user: doc,
      //             request: {
      //                 type: 'GET',
      //                 url: 'http://localhost:3000/users'
      //             }
      //         });
      //       } else {
      //         res
      //           .status(404)
      //           .json({ message: "No valid entry found for provided ID" });
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       res.status(500).json({ error: err });
      //     });
      // });
      
      // router.patch("/:userId", (req, res, next) => {
      //   const id = req.params.userId;
      //   const updateOps = {};
      //   for (const ops of req.body) {
      //     updateOps[ops.propName] = ops.value;
      //   }
      //   User.update({ _id: id }, { $set: updateOps })
      //     .exec()
      //     .then(result => {
      //       res.status(200).json({
      //           message: 'user updated',
      //           request: {
      //               type: 'GET',
      //               url: 'http://localhost:3000/users/' + id
      //           }
      //       });
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       res.status(500).json({
      //         error: err
      //       });
      //     });
      // });
      
      // router.delete("/:userId", (req, res, next) => {
      //   const id = req.params.userId;
      //   User.remove({ _id: id })
      //     .exec()
      //     .then(result => {
      //       res.status(200).json({
      //           message: 'user deleted',
      //           request: {
      //               type: 'POST',
      //               url: 'http://localhost:3000/products',
      //               body: { name: 'String', email: 'string' }
      //           }
      //       });
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       res.status(500).json({
      //         error: err
      //       });
      //     });
      // });
      
      
      // module.exports = router;
