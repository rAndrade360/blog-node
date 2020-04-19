const connection = require('../database/connection');
const {validationResult} = require('express-validator');
module.exports = {
    async store(req, res){
        const {name, slug} = req.body;
        const error = [...validationResult(req).errors];
        if(error.length>0){
            console.log(error)
            
         return res.render('admin/addcategory', {error: error})
        }else{
        connection('categories').insert({
            name,
            slug
        }).then(()=>{
            return res.redirect('/categories')
        }).catch((err)=>{

        })
    }

    },
    async index(req, res){
        const categories = await connection('categories').select('*').orderBy('id', 'desc');
       
        return res.render('admin/categories', {categories: categories});
    },
    async update(req, res){

    }
}