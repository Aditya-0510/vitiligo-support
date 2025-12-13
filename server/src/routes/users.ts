import express from 'express';
import User from '../models/User';
import { auth, AuthRequest } from '../middleware/auth';

const router = express.Router();

router.get('/me', auth, async (req, res) => {
    const authReq = req as AuthRequest;
    try {
        const user = await User.findById(authReq.user.user.id).select('-passwordHash');
        res.json(user);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-passwordHash');
        res.json(users);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

export default router;
