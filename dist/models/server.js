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
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const filtro_1 = __importDefault(require("../routes/filtro"));
const comuna_1 = __importDefault(require("../routes/comuna"));
const vivienda_1 = __importDefault(require("../routes/vivienda"));
const region_1 = __importDefault(require("../routes/region"));
const favorita_1 = __importDefault(require("../routes/favorita"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: "ApiFunca"
            });
        });
        this.app.use('/api/usuarios', usuario_1.default);
        this.app.use('/api/filtros', filtro_1.default);
        this.app.use('/api/comunas', comuna_1.default);
        this.app.use('/api/viviendas', vivienda_1.default);
        this.app.use('/api/regiones', region_1.default);
        this.app.use('/api/favoritas', favorita_1.default);
    }
    //funcion para paresar body
    middlewares() {
        this.app.use(express_1.default.json());
        //CORS
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la db');
            }
        });
    }
}
exports.default = Server;
