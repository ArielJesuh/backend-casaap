import express, { Request, Response} from 'express';
import Filtro from '../models/filtro';


export const getFiltroByUsuario = async (req:Request,res:Response) => {
    const {id_user} = req.params; 
    const filtro = await Filtro.findOne({where: {usuario_id_usuario: id_user}})

    if(filtro){
        res.json(filtro)
    } else {
        res.status(404).json({
            msg: `Este usuario no tiene un filtro guardado`
        })
    }
    res.json({
        msg:'get Filtro',
        id:id_user
    })
}

export const deleteFiltro = async (req:Request,res:Response) => {
    const {id} = req.params; 
    const filtro = await Filtro.findByPk({where: {id}})

    if(!filtro){
        res.status(404).json({
            msg: `No existe el filtro de id:  ${id}`
        })
    } else {
        await filtro.destroy();
        res.json({
            msg: "Filtro eleminado!"
        })
    }
    res.json({
        msg:'delete  Filtro', 
        id:id
    })
}


export const postFiltro = async (req:Request,res:Response) => {
    const {cantidad_habitaciones, cantidad_banos, max_valor, min_valor, comuna_id, usuario_id} = req.body;

    const filtro = await Filtro.findOne({where: {usuario_id_usuario: usuario_id}})

    if(filtro){
        await filtro.update(req.body);
        res.json({
            msg: 'Filtro actualizado'
        })
    } else {
        try{    
            await Filtro.create({
                cantidad_habitaciones: cantidad_habitaciones,
                cantidad_banos: cantidad_banos,
                max_valor: max_valor,
                min_valor: min_valor,
                comuna_id: comuna_id,
                usuario_id: usuario_id
            });
            res.json({
                msg:`Filtro agregado`
            })} catch(error) {
                console.log(error)
                res.json({
                msg:'A ocurrido un error!'
        })
        }
    }
}