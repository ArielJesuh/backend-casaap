"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const region_1 = require("../controllers/region");
const router = (0, express_1.Router)();
router.get('/:id', region_1.getRegion);
router.get('/', region_1.getRegiones);
exports.default = router;
