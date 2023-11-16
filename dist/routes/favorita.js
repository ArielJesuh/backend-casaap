"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favorita_1 = require("../controllers/favorita");
const router = (0, express_1.Router)();
router.post('/', favorita_1.postFavorita);
router.delete('/:idUser/:idVivienda', favorita_1.deleteFavorita);
exports.default = router;
