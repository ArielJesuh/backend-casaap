import { Router} from "express";
import { deleteUsuario, getUsuario, getUsuarioRecover, getUsuarios, loginUsuario, postUsuario, updateUsuario } from "../controllers/usuario";

const router = Router();

router.get('/',getUsuarios)
router.get('/:id',getUsuario)
router.get('/:nombre_usuario/:run',getUsuarioRecover)
router.delete('/:id',deleteUsuario)
router.post('/',postUsuario)
router.put('/:id', updateUsuario)
router.post('/login',loginUsuario)
export default router;