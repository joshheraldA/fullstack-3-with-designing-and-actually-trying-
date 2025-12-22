const { shoes } = require('../db/shoes.json')

const getShoes = (req, res) => {
    res.status(200).send({
        status: "Success",
        data: shoes
    })
}

module.exports = getShoes;