"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vivienda_1 = require("../controllers/vivienda");
const router = (0, express_1.Router)();
router.get('/:id', vivienda_1.getVivienda);
router.get('/', vivienda_1.getViviendas);
exports.default = router;
