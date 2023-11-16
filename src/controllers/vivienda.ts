import express, { Request, Response } from 'express';
import Vivienda from '../models/vivienda';
import Comuna from '../models/comuna';
import Inmobiliario from '../models/inmobiliario';
import Favorita from '../models/favorita';


export const getVivienda = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const vivienda = await Vivienda.findByPk(id, {
            include: [{
                model: Comuna,
                as: 'comuna'
            }]
        });
        if (vivienda) {
            return res.json(vivienda);
        } else {
            res.status(404).json({
                msg: `No existe la Vivienda con id ${id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }
}

export const getViviendaInmo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        const vivienda = await Vivienda.findByPk(id, {
            include: [{
                model: Inmobiliario,
                as: 'inmobiliario'
            }]
        });
        if (vivienda) {
            return res.json(vivienda);
        } else {
            res.status(404).json({
                msg: `No existe la Vivienda con id inmobiliaria${id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }
}

export const getViviendasFav = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        // Obtener las viviendas favoritas del usuario
        const favoritas = await Favorita.findAll({ where: { usuario_id_usuario: id } });

        // Extraer los ids de las viviendas favoritas
        const viviendaIds = favoritas.map((fav: any) => fav.vivienda_id_vivienda);

        // Buscar todas las viviendas con esos ids
        const viviendas = await Vivienda.findAll({
            where: { id: viviendaIds },
            include: [{
                model: Comuna,
                as: 'comuna'
            }]
        });

        if (viviendas.length > 0) {
            return res.json(viviendas);
        } else {
            res.status(404).json({
                msg: `No existen viviendas favoritas para el usuario con id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }
};



export const postVivienda = async (req:Request,res:Response) => {
    const {titulo ,descripcion, direccion, cantidad_habitaciones, cantidad_banos, metros_cuadrados, valor_uf, url_imagen, comuna_id_comuna , inmobiliario_id_inmobiliario} = req.body;
    console.log(req.body)
    const vivienda = await Vivienda.findOne({where: {direccion: direccion}})

    if(vivienda){
        res.status(400).json({
            msg: `Vivienda ${direccion} ya existe!`
        })

    } else {
        try{    
            await Vivienda.create({
                titulo:titulo,
                direccion: direccion,
                cantidad_habitaciones: cantidad_habitaciones,
                cantidad_banos: cantidad_banos,
                metros_cuadrados: metros_cuadrados,
                valor_uf: valor_uf,
                descripcion: descripcion,
                url_imagen: url_imagen,
                comuna_id_comuna: comuna_id_comuna,
                inmobiliario_id_inmobiliario: inmobiliario_id_inmobiliario
            });
            console.log(req)
            res.json({
                msg:`Vivienda ${direccion} agregado!`
            })} catch(error) {
                console.log(error)
                res.json({
                msg:'A ocurrido un error!'
        })
        }
    }


}

export const getViviendas = async (req: Request, res: Response) => {
    try {
        const listViviendas = await Vivienda.findAll({
            include: [
                {
                    model: Comuna,
                    as: 'comuna', 
                }
            ]
        });
        res.json(listViviendas);
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }


    
}

export const deleteVivienda = async (req:Request,res:Response) => {
    const {id} = req.params;
    const vivienda = await Vivienda.findByPk(id);

    if(!vivienda){
        res.status(404).json({
            msg: `No existe el usuario de id:  ${id}`
        })
    } else {
        await vivienda.destroy();
        res.json({
            msg: "vivienda eleminado!"
        })
        return;
    }
    res.json({
        msg:'delete Vivienda', 
        id:id
    })
}

export const updateVivienda = async (req:Request,res:Response) => {
    const {id} = req.params; 
    var {body} = req;
    try{
        var vivienda = await Vivienda.findByPk(id);
        if(vivienda){
            await vivienda.update(body);
            vivienda.update(vivienda);
            res.json({
                msg:'Vivienda actualizado'
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
