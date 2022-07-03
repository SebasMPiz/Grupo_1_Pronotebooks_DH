var multer = require('multer');
var path = require('path');

let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null ,path.join(__dirname,'../public/img/users'))
    },
    filename: (req,file,cb) => {
        const newFilename = Date.now() + path.extname(file.originalname);
        cb(null,newFilename);
    }
})

const uploadUserFile = multer({storage});

module.exports = uploadUserFile;