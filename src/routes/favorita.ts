import { Router} from "express";
import { postFavorita, deleteFavorita} from "../controllers/favorita";

const router = Router();

router.post('/',postFavorita)
router.delete('/:idUser/:idVivienda', deleteFavorita);

export default router;