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

        res.set('content-location', `/api/farm/${createProduct.farmId}/product/${createProduct._id}`);

        res.status(201).json({
            data: createProduct,
            url: `/api/farm/${createProduct.farmId}/product/${createProduct._id}`
        })

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}


exports.getProducts = (req, res) => {
    Product.find({}).exec()
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error)
    });
};


exports.getProductById = (req, res) => {
    Product.findOne({'_id': req.params.id}).exec()
    .then(result => {
        res.json({
            data: result,
            url: `/api/farm/${result.farmId}/product/${result._id}`
        })
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

    Product.findOneAndReplace({'_id': req.params.id},replacement, {new: true}).exec()
    .then(result => {
        res.json(result);
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