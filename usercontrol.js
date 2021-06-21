const muser = require("../models/muser");
const mongoose = require('mongoose');


exports.crearuser = async (req, res) => {
    let id= new mongoose.Types.ObjectId; 
    let user = {...req.body, _id: id.toString()}
    
    try{
        let vuser;

        //VALIDAMOS POR IDENTIFICATION y EMAIL
        const vuser1e = await muser.findOne({ email: req.body.email });
        if(vuser1e){
            res.send({
                user:null,
                message: "Ya el email está registrado"
            });
            return
        }

        const vuser2 = await muser.findOne({ identification: req.body.identification });
        if(vuser2){
            res.send({
                user:null,
                message: "Ya la indentificación se encuentra registrada"
            });

            return
        }
        
        const vuser3 =req.body.identification;
       if( (isNaN(vuser3)== true)){
            res.send({
                user:null,
                message: "Identificacion contiene letras"
            });

            return
        }  
         const vuser4 =req.body.phone;
        if( (isNaN(vuser4)== true)){
            res.send({
                user:null,
                message: "Teléfono contiene letras"
            });

            return
        }  
 
        if((valido=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)==false)){
            res.send({
                user:null,
                message: "No tiene formato de Email"
            });

            return
        }    
         
        
        vuser = new muser(user);
        await vuser.save();
        res.send({message: "Usuario creado correctamente"})

        

    }catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obteneruser = async (req, res) => {

    try{
 
    const vuser1 = await muser.find();
        res.json(vuser1)

    }catch(error){
        console.log(error);
        res.estatus(500).send('Error');
    }
}

exports.cambiaruser = async (req, res) => {

    try{
    
    const {name, lastname, email, identification, phone} = req.body

    
    let vuser = await muser.findById(req.params.id);
    if(!vuser){
        res.status(404).json({msg:"no existe"})
    } 

    vuser.name = name;
    vuser.lastname = lastname;
    vuser.email = email;
    vuser.identification = identification;
    vuser.phone = phone;

    vuser = await muser.findOneAndUpdate({ _id: req.params.id}, vuser, {new: true})
    res.json(vuser);

    }catch(error){
        console.log(error);
        res.estatus(500).send('Error');
    }
}
