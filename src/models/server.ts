import express, { Application ,Request, Response} from 'express';
import routesUsuario from '../routes/usuario'
import routesFiltro from '../routes/filtro'
import routesComuna from '../routes/comuna'
import routesViviendas from '../routes/vivienda'
import routesRegiones from '../routes/region'
import db from '../db/connection'
import cors from 'cors'
class Server{
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`App en el puerto ${this.port}`)
        })
    }


    routes(){
        this.app.get('/',(req: Request, res: Response) => {
            res.json({
                msg:"ApiFunca"
            })
        })
        this.app.use('/api/usuarios',routesUsuario)
        this.app.use('/api/filtros',routesFiltro)
        this.app.use('/api/comunas',routesComuna)
        this.app.use('/api/viviendas',routesViviendas)
        this.app.use('/api/regiones',routesRegiones)
    }
//funcion para paresar body
    middlewares(){
        this.app.use(express.json())

        //CORS
        this.app.use(cors());
    }

    async dbConnect(){
        try{
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch(error) {
            console.log(error);
            console.log('Error al conectarse a la db');
        }
    }
}
export default Server;