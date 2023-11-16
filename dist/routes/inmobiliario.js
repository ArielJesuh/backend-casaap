"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inmobiliario_1 = require("../controllers/inmobiliario");
const router = (0, express_1.Router)();
router.get('/', inmobiliario_1.getInmobiliarios);
router.get('/:id', inmobiliario_1.getInmobiliario);
