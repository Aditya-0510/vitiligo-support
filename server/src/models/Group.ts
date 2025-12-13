import mongoose, { Schema, Document } from 'mongoose';

export interface IGroup extends Document {
    name: string;
    description: string;
    type: 'public' | 'private';
    members: mongoose.Types.ObjectId[];
    createdAt: Date;
}

const GroupSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ['public', 'private'], default: 'public' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IGroup>('Group', GroupSchema);
