import { Router} from "express";
import { deleteVivienda, getVivienda, getViviendaInmo, getViviendas, postVivienda, updateVivienda} from "../controllers/vivienda";

const router = Router();

router.get('/:id',getVivienda)
router.get('/',getViviendas)
router.post('/',postVivienda)
router.delete('/:id',deleteVivienda)
router.put('/:id', updateVivienda)
router.get('/inmo/:id',getViviendaInmo)
export default router;