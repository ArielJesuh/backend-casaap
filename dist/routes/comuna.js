"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comuna_1 = require("../controllers/comuna");
const router = (0, express_1.Router)();
router.get('/:id', comuna_1.getComuna);
router.get('/', comuna_1.getComunas);
exports.default = router;
