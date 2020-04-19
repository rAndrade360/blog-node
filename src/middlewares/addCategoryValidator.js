const {check} = require('express-validator');
module.exports = [
    check('name').notEmpty().withMessage("O campo de nome não pode ser vazio!"),
    check('slug').notEmpty().withMessage("O campo de slug não pode ser vazio!"),

]