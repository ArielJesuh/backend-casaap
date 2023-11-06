"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filtro_1 = require("../controllers/filtro");
const router = (0, express_1.Router)();
router.get('/:id_user', filtro_1.getFiltroByUsuario);
router.delete('/:id', filtro_1.deleteFiltro);
router.post('/', filtro_1.postFiltro);
exports.default = router;
