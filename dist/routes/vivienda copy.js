"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vivienda_1 = require("../controllers/vivienda");
const router = (0, express_1.Router)();
router.get('/:id', vivienda_1.getVivienda);
router.get('/', vivienda_1.getViviendas);
router.post('/', vivienda_1.postVivienda);
router.delete('/:id', vivienda_1.deleteVivienda);
router.put('/:id', vivienda_1.updateVivienda);
router.get('/inmo/:id', vivienda_1.getViviendaInmo);
router.get('/favs/:id', vivienda_1.getViviendasFav);
exports.default = router;
