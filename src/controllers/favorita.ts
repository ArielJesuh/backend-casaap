import express, { Request, Response } from 'express';
import Favorita from '../models/favorita';

export const postFavorita = async (req:Request,res:Response) => {
    const {usuario_id_usuario , vivienda_id_vivienda} = req.body;

        try{    
            await Favorita.create({
                usuario_id_usuario: usuario_id_usuario,
                vivienda_id_vivienda: vivienda_id_vivienda
            });
            console.log(req)
            res.json({
                msg:`Vivienda agregada a favoritas!`
            })} catch(error) {
                console.log(error)
                res.json({
                msg:'A ocurrido un error!'
        })
    }
}

export const deleteFavorita = async (req:Request,res:Response) => {
    const { idUser, idVivienda } = req.params;
    const favorita = await Favorita.findOne({
        where: {
          usuario_id_usuario: idUser,
          vivienda_id_vivienda: idVivienda
        }
      });

    if(!favorita){
        res.status(404).json({
            msg: `No existe vivienda favorita`
        })
    } else {
        await favorita.destroy();
        res.json({
            msg: "favorita eleminado!"
        })
        return;
    }
    res.json({
        msg:'delete Favorita'
    })
}

