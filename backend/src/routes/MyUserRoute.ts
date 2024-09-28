import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// when we get a request /api/my/user, its gets called and passes the request to MyUserController.createCurrentUser witch gonna handle the buissness logic
router.post("/", MyUserController.createCurrentUser);

export default router;