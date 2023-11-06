import express, { Request, Response} from 'express';
import Usuario from '../models/usuario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const getUsuarios = async (req:Request,res:Response) => {

    const listUsuarios = await Usuario.findAll()
    res.json(listUsuarios)

}

export const getUsuario = async (req:Request,res:Response) => {
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    if(usuario){
        res.json(usuario)
        return
    } else {
        res.status(404).json({
            msg: `No existe el usuario de id:  ${id}`
        })
        return
    }
}


export const deleteUsuario = async (req:Request,res:Response) => {
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    if(!usuario){
        res.status(404).json({
            msg: `No existe el usuario de id:  ${id}`
        })
        return
    } else {
        await usuario.destroy();
        res.json({
            msg: "usuario eleminado!"
        })
        return

    }

}


export const postUsuario = async (req:Request,res:Response) => {
    const {nombre_usuario, contrasena} = req.body;

    const usuario = await Usuario.findOne({where: {nombre_usuario: nombre_usuario}})

    if(usuario){
        res.status(400).json({
            msg: `Usuario ${nombre_usuario} ya existe!`
        })
    } else {
        const hashedPass = await bcrypt.hash(contrasena,10);
        try{    
            await Usuario.create({
                nombre_usuario:nombre_usuario,
                contrasena:hashedPass,
                email:"",
                run:"",
                telefono:0,
                tipo:0
            });
            res.json({
                msg:`Usuario ${nombre_usuario} agregado!`
            })} catch(error) {
                console.log(error)
                res.json({
                msg:'A ocurrido un error!'
        })
        }
    }


}

export const updateUsuario = async (req:Request,res:Response) => {
    const {id} = req.params; 
    const {body} = req;
    try{
        const usuario = await Usuario.findByPk(id);
        if(usuario){
            await usuario.update(body);
            res.json({
                msg:'Usuario actualizado'
            })
        } else {
            res.status(404).json({
                msg: `No existe el usuario de id:  ${id}`
            })
        }
    } catch(error) {
        console.log(error)
        res.json({
            msg:'A ocurrido un error!'
        })
    }
}
export const loginUsuario = async (req:Request, res: Response) => {
    const {nombre_usuario,contrasena} = req.body;
    //Validacion si existe
    const usuario = await Usuario.findOne({where: {nombre_usuario: nombre_usuario}})

    if(!usuario){
        return res.status(400).json({
            msg:`El usuario ${nombre_usuario} no existe`
        })
    }
    //Validar pass
    const validPassword = await bcrypt.compare(contrasena,usuario.contrasena)
    if(!validPassword){
        return res.status(400).json({
            msg:"Error en la constrasenia"
        })
    }
    console.log(validPassword);
    //Generacion de token
    const token = jwt.sign({
        nombre_usuario: nombre_usuario,

    },process.env.SECRET_KEY || 'PASS123' );
    res.json(token);

}