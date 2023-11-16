import express, { Request, Response } from 'express';
import Comuna from '../models/comuna';

export const getComuna = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const comuna = await Comuna.findByPk(id);
        if (comuna) {
            return res.json(comuna); // Enviar la comuna encontrada como respuesta
        } else {
            res.status(404).json({
                msg: `No existe la Comuna con id ${id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de comunas'
        });
    }
}

export const getComunas = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const listComunas = await Comuna.findAll({
            where: {
                region_id_region: id
            }
        });
        res.json(listComunas);
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de comunas'
        });
    }
}
