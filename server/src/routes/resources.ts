import express from 'express';
import Resource from '../models/Resource';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

router.post('/', auth, async (req, res) => {
    const { title, category, content, link } = req.body;

    try {
        const newResource = new Resource({
            title,
            category,
            content,
            link,
        });

        const resource = await newResource.save();
        res.json(resource);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

export default router;
