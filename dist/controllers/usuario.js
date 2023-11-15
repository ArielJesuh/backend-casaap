"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsuario = exports.updateUsuario = exports.postUsuario = exports.deleteUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsuarios = yield usuario_1.default.findAll();
    res.json(listUsuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        return res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario de id:  ${id}`
        });
    }
    res.json({
        msg: 'get Usuario',
        id: id
    });
});
exports.getUsuario = getUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe el usuario de id:  ${id}`
        });
    }
    else {
        yield usuario.destroy();
        res.json({
            msg: "usuario eleminado!"
        });
        return;
    }
    res.json({
        msg: 'delete  Usuario',
        id: id
    });
});
exports.deleteUsuario = deleteUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_usuario, contrasena, email, run, telefono, tipo } = req.body;
    const usuario = yield usuario_1.default.findOne({ where: { nombre_usuario: nombre_usuario } });
    if (usuario) {
        res.status(400).json({
            msg: `Usuario ${nombre_usuario} ya existe!`
        });
    }
    else {
        const hashedPass = yield bcrypt_1.default.hash(contrasena, 10);
        try {
            yield usuario_1.default.create({
                nombre_usuario: nombre_usuario,
                contrasena: hashedPass,
                email: email,
                run: run,
                telefono: telefono,
                tipo: tipo
            });
            res.json({
                msg: `Usuario ${nombre_usuario} agregado!`
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                msg: 'A ocurrido un error!'
            });
        }
    }
});
exports.postUsuario = postUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    var { body } = req;
    body.contrasena = yield bcrypt_1.default.hash(body.contrasena, 10);
    try {
        var usuario = yield usuario_1.default.findByPk(id);
        if (usuario) {
            yield usuario.update(body);
            usuario.update(usuario);
            res.json({
                msg: 'Usuario actualizado'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el usuario de id:  ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'A ocurrido un error!'
        });
    }
});
exports.updateUsuario = updateUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_usuario, contrasena } = req.body;
    //Validacion si existe
    const usuario = yield usuario_1.default.findOne({ where: { nombre_usuario: nombre_usuario } });
    if (!usuario) {
        return res.status(400).json({
            msg: `El usuario ${nombre_usuario} no existe`
        });
    }
    //Validar pass
    const validPassword = yield bcrypt_1.default.compare(contrasena, usuario.contrasena);
    if (!validPassword) {
        return res.status(400).json({
            msg: "Error en la constrasenia"
        });
    }
    console.log(validPassword);
    //Generacion de token
    const token = jsonwebtoken_1.default.sign({
        nombre_usuario: nombre_usuario,
        tipo: usuario.tipo,
        id: usuario.id
    }, process.env.SECRET_KEY || 'PASS123');
    res.json(token);
});
exports.loginUsuario = loginUsuario;
