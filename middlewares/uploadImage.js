var multer = require('multer');
var path = require('path');

let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null ,path.join(__dirname,'../../public/images/products'))
    },
    filename: (req,file,cb) => {
        const newFilename = Date.now() + path.extname(file.originalname);
        cb(null,newFilename);
    }
})

const uploadFile = multer({storage});

module.exports = uploadFile;