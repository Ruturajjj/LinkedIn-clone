import express from "express";
import { protectRoute } from "../middelware/auth.middelware.js";
import { getPublicProfile, getSuggestedConnections, updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/suggestions", protectRoute, getSuggestedConnections );
router.get("/:username", protectRoute, getPublicProfile );
// router.get("/:username([a-zA-Z0-9_-]+)", protectRoute, getPublicProfile);


router.put("/profile", protectRoute, updateProfile)

export default router;