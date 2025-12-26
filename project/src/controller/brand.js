const { shoes } = require('../db/shoes.json')

const getBrands = (req, res) => {
    let brandList = []

    shoes.forEach(shoe => {
        if(!(brandList.includes(shoe['brand']))) {
            brandList.push(shoe['brand'])
        }
    })

    res.status(200).send({
        success: true,
        data: brandList
    })
}

module.exports = { getBrands }