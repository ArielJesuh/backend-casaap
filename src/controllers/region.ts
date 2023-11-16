import express, { Request, Response } from 'express';
import Region from '../models/region';

export const getRegion = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const region = await Region.findByPk(id);
        if (region) {
            return res.json(region); 
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

export const getRegiones = async (req: Request, res: Response) => {
    try {
        const listRegions = await Region.findAll();
        res.json(listRegions);
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de comunas'
        });
    }
}
