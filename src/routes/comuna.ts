import { Router} from "express";
import { getComuna, getComunas} from "../controllers/comuna";

const router = Router();

router.get('/:id',getComunas)



export default router;