const { shoes } = require('../db/shoes.json')

const getShoes = (req, res) => {
    res.status(200).send({
        status: "Success",
        data: shoes
    })
}

const filterShoes = (req, res) => {
    const { brand } = req.params

    const shoeBrand = shoes.filter(shoe =>  shoe['brand'] === brand)

    res.status(200).send({
        success: true,
        data: shoeBrand
    })
}

module.exports = { 
    getShoes,
    filterShoes
}
