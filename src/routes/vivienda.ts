import { Router} from "express";
import { deleteVivienda, getVivienda, getViviendas, postVivienda, updateVivienda} from "../controllers/vivienda";

const router = Router();

router.get('/:id',getVivienda)
router.get('/',getViviendas)
router.post('/',postVivienda)
router.delete('/:id',deleteVivienda)
router.put('/:id', updateVivienda)


export default router;