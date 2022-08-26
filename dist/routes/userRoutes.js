"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// router.get("/", userController.findAll); // Lista todos usuários
// router.get("/:id", userController.findOne); // Lista um usuário pelo id

router.post("/", _loginRequired2.default, _UserController2.default.create);
router.patch("/", _loginRequired2.default, _UserController2.default.update);
router.delete("/", _loginRequired2.default, _UserController2.default.delete);

exports. default = router;
