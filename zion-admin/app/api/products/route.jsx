import {Product} from "@/models/Product";

export default async function handler(req, res) {

  const {method} = req 


  if (method== 'GET') {
    
    if (req.query?.id) {
      res.json(await Product.findOne({_id: req.query.id}))
    } else {
      res.json(await Product.find());
    }
  }
}