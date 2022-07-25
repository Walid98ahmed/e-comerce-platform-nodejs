const mongoose = require("mongoose")
const imageSchema  = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    image: {
        data: Buffer,
        contentType: String
    }

})


 const Upload = mongoose.model('Upload', imageSchema);

module.exports = Upload;
