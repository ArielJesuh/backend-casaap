import { Router} from "express";
import {  getVivienda, getViviendas} from "../controllers/vivienda";

const router = Router();

router.get('/:id',getVivienda)
router.get('/',getViviendas)


export default router;