const UserModel= require('./model');

module.exports.create= async ({name, department, pnumber})=>{
    const user= await UserModel.create({
       name: name,
       department:department,
       pnumber:pnumber 
    })
    return user;
}


module.exports.getAll= async ()=>{
    const user= await UserModel.find();
    return user;
}

module.exports.updates = async ({ department }, { pnumber}) => {
    const users = await UserModel.updateOne({
      department: department
    }, {
      pnumber:pnumber
    }, {
      multi: true
    });
    return users;
  };

  
