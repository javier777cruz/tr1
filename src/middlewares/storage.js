const path = require ('path');
const multer = require ('multer');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve( __dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        cb(null, `image-${Date.now()}-${path.extname(file.originalname)}`);
    }
});

const upload = multer ({ storage: storage});
module.exports = upload;