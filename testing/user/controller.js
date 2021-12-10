const user = require('./service');

module.exports.create= async(req,res)=>{
    try{const response= await user.create(req.body);
    
    res.send(response);}
    catch(err){
        res.send(err);
    }
}

module.exports.getAll= async (req, res)=>{
    const response= await user.getAll();
    res.send(response);
}


module.exports.updates = async (req, res) => {
  const response = await user.updates(req.paramas, req.body);
  res.send(response);
};
console.log("this working")
