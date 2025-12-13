import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
import authRoutes from './routes/auth';
import resourceRoutes from './routes/resources';
import postRoutes from './routes/posts';
import groupRoutes from './routes/groups';
import userRoutes from './routes/users';

app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Vitiligo Support Network API');
});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vitiligo-support';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
