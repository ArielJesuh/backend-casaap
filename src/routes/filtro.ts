import { Router} from "express";
import { getFiltroByUsuario, deleteFiltro, postFiltro} from "../controllers/filtro";

const router = Router();

router.get('/:id_user',getFiltroByUsuario)
router.delete('/:id',deleteFiltro)
router.post('/',postFiltro)


export default router;