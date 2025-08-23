import express from "express";
import { protectRoute } from "../middelware/auth.middelware.js";
import { getPublicProfile, getSuggestedConnections, updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

// Parameter validation middleware for username
router.param('username', (req, res, next, username) => {
    // Validate username format - only allow letters, numbers, underscores, and hyphens
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
        return res.status(400).json({ 
            success: false,
            message: "Invalid username format. Only letters, numbers, underscores, and hyphens are allowed." 
        });
    }
    next();
});

router.get("/suggestions", protectRoute, getSuggestedConnections);
router.put("/profile", protectRoute, updateProfile);

// Fixed route - removed the invalid regex syntax
router.get("/:username", protectRoute, getPublicProfile);

export default router;