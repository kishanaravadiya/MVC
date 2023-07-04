const Admin = require('../models/Adminmodel');

module.exports.index = (req,res) =>{
   return res.render('home')
}
module.exports.insertdata = async (req,res) =>{
    try{
         if(req.body){
            let insertdata = await Admin.create({
                S_name : req.body.name,
                S_phone : req.body.phone,
                S_email : req.body.email,
                S_password : req.body.password
            });if(insertdata){
                    console.log("Data is inserted");
                    return res.redirect('back');
                }else{
                    console.log("Data is inserted");
                    return false;
                }
        }else{
            console.log("please enter valid details");
            return false;
        }      
    }
    catch(err){
        console.log(err);
        return false;
    }
}

module.exports.viewData = async (req,res) =>{
    try{
        let view = await Admin.find({});

        if(view){
            return res.render('view',{
                record : view
            });
        }else{
            console.log("Data Not Views In Page");
            return false;
        }
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports.deletdata = async (req,res) =>{
    try{
        let id = req.params.id;
        let deletedata = await Admin.findByIdAndDelete(id);

        if(deletedata){
            console.log("Record Is Seccessfully Delete");
            return res.redirect('back');
        }else{
            console.log("Record Is Not Delete");
            return false;
        }
    }
    catch(err){
        console.log(err);
        return false;
    }
}
module.exports.Editdata = async (req,res) =>{
    try{
        let editid = req.params.id;
        let EditData = await Admin.findById(editid);

        if(EditData){
            return res.render('edit',{
                single : EditData
            });
        }
        else{
            console.log("Data Not Found");
            return false;
        }
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports.UpdateData = async (req,res) =>{
    try{
        let edit_id = req.body.editid;
        let editdata = await Admin.findByIdAndUpdate(edit_id,{
            S_name : req.body.name,
            S_phone : req.body.phone,
            S_email : req.body.email,
            S_password : req.body.password
        });
        if(editdata){
            console.log("Record Is Seccessfully Updata");
            return res.redirect('/admin/viewData');
        }else{
            console.log("Data Not Updata");
            return false;
        }
    }catch(err){
        console.log(err);
        return false;
    }
}