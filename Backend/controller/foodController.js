import foodModel from '../model/foodModel.js'
import fs from 'fs'

const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save()
        res.json({success:true,message:"Successfully uploaded food"})
    }catch(err){
        console.log(err)
        res.json({success:false,message:"Error uploading food"})
    }
}

export {addFood};