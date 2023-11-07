import express, { Request, Response } from 'express';
import Vivienda from '../models/vivienda';

export const getVivienda= async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const vivienda = await Vivienda.findByPk(id);
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

export const getViviendas= async (req: Request, res: Response) => {
    try {
        const listViviendas = await Vivienda.findAll();
        res.json(listViviendas);
    } catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }
}
