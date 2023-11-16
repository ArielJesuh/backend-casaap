import express, { Request, Response} from 'express';
import Inmobiliario from '../models/inmobiliario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const getInmobiliarios = async (req:Request,res:Response) => {

    const listInmobiliarios = await Inmobiliario.findAll()
    res.json(listInmobiliarios)

}

export const getInmobiliario = async (req:Request,res:Response) => {
    const {id} = req.params;
    const inmobiliario = await Inmobiliario.findByPk(id);

    if(inmobiliario){
        return res.json(inmobiliario)
    } else {
        res.status(404).json({
            msg: `No existe el inmobiliario de id:  ${id}`
        })
    }
    res.json({
        msg:'get inmobiliario',
        id:id
    })
}
