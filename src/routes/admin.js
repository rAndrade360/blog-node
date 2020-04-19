const routes = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
const addCategoryValidator = require('../middlewares/addCategoryValidator');

//ADMIN
routes.get('/categories', CategoryController.index)
routes.get('/', (req, res)=>{
	return res.render('admin/index');
});
routes.post('/category/cadastrar', addCategoryValidator,CategoryController.store);
routes.get('/category/cadastrar', (req, res)=>{
	return res.render('admin/addcategory');
});




module.exports = routes;