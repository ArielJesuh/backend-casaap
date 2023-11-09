import express, { Request, Response } from 'express';
import Filtro from '../models/filtro';
import Usuario from '../models/usuario';

export const getFiltroByUsuario = async (req: Request, res: Response) => {
    const { id_user } = req.params;

    try {
        const filtro = await Filtro.findOne({ where: { usuario_id_usuario: id_user } });

        if (filtro) {
            res.json(filtro);
        } else {
            res.status(404).json({
                msg: `Este usuario no tiene un filtro guardado`
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de filtros'
        });
    }
}

export const deleteFiltro = async (req:Request,res:Response) => {
    const {id} = req.params; 
    const filtro = await Filtro.findByPk(id)

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
}


export const postFiltro = async (req: Request, res: Response) => {
    const { cantidad_habitaciones, cantidad_banos, max_valor, min_valor, comuna_id_comuna, usuario_id_usuario } = req.body;

    if (usuario_id_usuario === undefined) {
        res.status(400).json({
            msg: 'El campo usuario_id es obligatorio en el cuerpo de la solicitud.',
            body: req.body
        });
        return;
    }

    const usuario = await Usuario.findByPk(usuario_id_usuario);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe el usuario de id: ${usuario_id_usuario}`
        });
    } else {
        const filtro = await Filtro.findOne({ where: { usuario_id_usuario: usuario_id_usuario } });

        if (filtro) {
            await filtro.update(req.body);
            res.json({
                msg: 'Filtro actualizado'
            });
        } else {
            try {
                await Filtro.create(req.body);
                res.json({
                    msg: `Filtro agregado`
                });
            } catch (error) {
                console.log(error);
                res.json({
                    msg: 'A ocurrido un error!',
                    body: req.body
                });
            }
        }
    }
}
