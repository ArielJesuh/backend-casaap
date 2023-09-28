import { Router} from "express";
import { deleteUsuario, getUsuario, getUsuarios, loginUsuario, postUsuario, updateUsuario } from "../controllers/usuario";

const router = Router();

router.get('/',getUsuarios)
router.get('/:id',getUsuario)
router.delete('/:id',deleteUsuario)
router.post('/',postUsuario)
router.put('/:id', updateUsuario)
router.post('/login',loginUsuario)
export default router;