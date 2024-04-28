import { timeStamp } from 'console'
import mongoose from 'mongoose'


const productschema =  new Schema({
  title: {type:String, required:true},
  description: String,
  price: {type: Number, required: true},
}, {
  timeStamp: true
}

)


export const Product = mongoose.models.Product ||  mongoose.model('Product', productschema)