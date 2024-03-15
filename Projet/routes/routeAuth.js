import { Router } from "express";

import { login } from "../authentification/login.js";

import loginRules from "../validations/validationLogin.js";

const routeAuth=Router()

routeAuth.post('/',loginRules, login)

export default routeAuth