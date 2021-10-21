const Product = require('../models/product.model')

exports.createProduct = async (req, res) => {
    try {
        const {
            farmId,
            name,
            description,
            taste,
            price,
            aroma,
            coffeeStock,
            roastLevel,
            roastDate,
            coffeeVariety,
            size,
            coffeeProcess,
            type,
            picture

        } = req.body


        const data = {
            farmId: farmId,
            name: name,
            description: description,
            taste: taste,
            price: price,
            aroma: aroma,
            coffeeStock: coffeeStock,
            roastLevel: roastLevel,
            roastDate: roastDate,
            coffeeVariety: coffeeVariety,
            size: size,
            coffeeProcess: coffeeProcess,
            type: type,
            picture: picture,
        }

        const createProduct = await Product.create(data)

        res.status(201).json(createProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}


exports.getProducts = (req, res) => {
    Product.find({}).exec()
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    });
};


exports.getProductById = (req, res) => {
    Product.findOne({'_id': req.params.id}).exec()
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    });
};


exports.modifyProduct = (req, res) => {
  
    const {
        farmId,
        name,
        description,
        taste,
        price,
        aroma,
        coffeeStock,
        roastLevel,
        roastDate,
        coffeeVariety,
        size,
        coffeeProcess,
        type,
        picture
    } = req.body


    const replacement = {
        "farmId": farmId,
        "name": name,
        "description": description,
        "taste": taste,
        "price": price,
        "aroma": aroma,
        "coffeeStock": coffeeStock,
        "roastLevel": roastLevel,
        "roastDate": roastDate,
        "coffeeVariety": coffeeVariety,
        "size": size,
        "coffeeProcess": coffeeProcess,
        "type": type,
        "picture": picture,
    }

    Product.findOneAndReplace({'_id': req.params.id},replacement).exec()
    .then(result => {
        res.json(result);
        //Updating the contents, but returning the old one. Need to fix
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    });
};


exports.deleteProduct = (req, res) => {
    Product.deleteOne({'_id': req.params.id}).exec()
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    });
};