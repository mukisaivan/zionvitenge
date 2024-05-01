import mongoose, {Schema} from 'mongoose'


const productschema =  new mongoose.Schema({
  title: {type:String, required:true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
}, {
  timeStamp: true
}
)

const Product = mongoose.models.Product || mongoose.model('Product', productschema)
 
export default Product;