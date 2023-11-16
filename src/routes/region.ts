import { Router} from "express";
import { getRegion, getRegiones} from "../controllers/region";

const router = Router();

router.get('/:id',getRegion)
router.get('/',getRegiones)



export default router;