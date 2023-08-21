src/controllers/usersController.js
const fs = require ('fs');
const path = require ('path');

const rutaAlJson2= path.resolve (__dirname, '../data/users.json');

const dataJSON2 = fs.readFileSync(rutaAlJson2,{encoding: 'utf-8'})

const users = JSON.parse (dataJSON2);




const controller = {
    all: (req, res) => {
        res.json(users)
   },
    one: function  (req, res) {
        let id = req.params.id;
        let profile= users.find(user => user.id == id);
        res.json(profile);
    }
}

 module.exports = contro