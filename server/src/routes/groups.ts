import express from 'express';
import Group from '../models/Group';
import { auth, AuthRequest } from '../middleware/auth';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const groups = await Group.find().populate('members', ['name']);
        res.json(groups);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

router.post('/', auth, async (req, res) => {
    const { name, description, type } = req.body;
    const authReq = req as AuthRequest;

    try {
        const newGroup = new Group({
            name,
            description,
            type,
            members: [authReq.user.user.id], // Creator is a member
        });

        const group = await newGroup.save();
        res.json(group);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

export default router;
