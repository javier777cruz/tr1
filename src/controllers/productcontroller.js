const Product = require('../database/models/product');

const controller = {
    crear: async (req, res) => {
        try {
            let product = {
                name: req.body.name,
                price: req.body.price,
                subcatecory : req.body.subcatecory,
                category: req.body.category,
                description: req.body.description,
                image: req.file.filename
            }
            const productDatabase = await Product.create(product);
            res.status(201).json(productDatabase);
        } catch(error) {
            res.status(500).json({message: 'Internal server error'});
        }
    },
    update: async (req, res) => {
        try {
            console.log(req.params.id);
            console.log(req.body);
            const product = await Product.findByIdAndUpdate({_id: req.params.id}, req.body, { //Con new: true, muestra el producto luego del update. pregunta = porque desde body -> form no me lo toma el update ?? 
                new: true
            });
            return res.status(200).json(product);
        }catch(error){
            return res.status(404).json({ error: 'Elemento no encontrado' });
        }
        
    },
    listar: async (req, res) => {
        const products = await Product.find({});
        res.status(200).json(products);
    },
    detalle: async (req, res) => {
        try {
            const detail = await Product.findById(req.params.id);
            res.status(200).json(detail);
        }catch(error){
            return res.status(404).json({ error: 'Elemento no encontrado' });
        }  
    },
    category: async (req, res) =>{
        console.log('category');
        const products = await Product.find({}).sort({category:1});
        res.status(200).json(products);
    },
    categoryOnce: async (req, res) =>{
        console.log('category once');
        console.log(req.params.category);
        const products = await Product.find({category:req.params.category});
        if(products.length == 0) return res.status(404).json({ error: 'Categoria no encontrada' });
        else res.status(200).json(products);
    },
    lower: async (req, res) =>{
        console.log('lower price');
        const products = await Product.find({}).sort({price:1});
        res.status(200).json(products);
    },
    higher: async (req, res) =>{
        console.log('higher price');
        const products = await Product.find({}).sort({price:-1});
        res.status(200).json(products);
    },
    seeker: async (req, res) => {
        try {
            const detail = await Product.find({name:{ $regex: req.query.name , $options: 'i' }}); //con la expresión regex busco todos aquellos objetos que en el name obtengan el valor de la query
            console.log(detail);
            if(detail.length == 0) return res.status(404).json({ error: 'No se han encontrado elementos que contengan esa busqueda' });
            res.status(200).json(detail);

        }catch(error){
            return res.status(404).json({ error: 'Elemento no encontrado' });
        }  
    }
}

module.exports = controller;