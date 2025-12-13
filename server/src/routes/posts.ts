import express from 'express';
import Post from '../models/Post';
import { auth, AuthRequest } from '../middleware/auth';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', ['name', 'location']).sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

router.post('/', auth, async (req, res) => {
    const { title, content, tags } = req.body;
    const authReq = req as AuthRequest;

    try {
        const newPost = new Post({
            title,
            content,
            tags,
            author: authReq.user.user.id,
        });

        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error((err as Error).message);
        res.status(500).send('Server Error');
    }
});

export default router;
