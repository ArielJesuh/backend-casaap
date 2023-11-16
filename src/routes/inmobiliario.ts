import { Router} from "express";
import { getInmobiliario, getInmobiliarios } from "../controllers/inmobiliario";

const router = Router();

router.get('/',getInmobiliarios)
router.get('/:id',getInmobiliario)