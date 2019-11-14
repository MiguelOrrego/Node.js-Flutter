"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.routesUser = express_1.Router();
        this.config();
    }
    config() {
        this.routesUser.get('/', userController_1.userController.users);
    }
}
const router = new UserRoutes();
exports.default = router.routesUser;
