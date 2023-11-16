import { Router} from "express";
import { deleteVivienda, getVivienda, getViviendaInmo, getViviendas, postVivienda, updateVivienda,getViviendasFav} from "../controllers/vivienda";

const router = Router();

router.get('/:id',getVivienda)
router.get('/',getViviendas)
router.post('/',postVivienda)
router.delete('/:id',deleteVivienda)
router.put('/:id', updateVivienda)
router.get('/inmo/:id',getViviendaInmo)
router.get('/favs/:id',getViviendasFav)
export default router;