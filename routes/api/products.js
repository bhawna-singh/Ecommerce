const Product=require('../../db').Product
const route=require('express').Router()
route.get('/',(req,res) =>{

User.findAll()
.then((products) =>{
 res.status(200).send(products)
})
.catch((err) => {
    res.status(500).send({
        error: "could not retrieve products"
    })
})
})

route.post('/',(req,res)=>{
    //validate the values
    if(isNaN(req.body.price))
    {
        return res.status(403).send({
            error:"pice is not a valid number"
        })
    }
    
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    }).then((product)=>{
        res.status(201).send(product)
    })
    .catch((err)=>{
        res.status(501).send({
            error:"could not add new product"
        }) 
    })
})

exports=module.exports=route;
