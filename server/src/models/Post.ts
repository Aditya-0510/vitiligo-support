import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
    author: mongoose.Types.ObjectId;
    title: string;
    content: string;
    tags: string[];
    upvotes: number;
    createdAt: Date;
}

const PostSchema: Schema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
    upvotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPost>('Post', PostSchema);
