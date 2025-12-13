import mongoose, { Schema, Document } from 'mongoose';

export interface IResource extends Document {
    title: string;
    category: 'Types' | 'Treatment' | 'Topics' | 'Multiple Diagnosis';
    content: string; // Markdown or HTML content
    link?: string;
    createdAt: Date;
}

const ResourceSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, enum: ['Types', 'Treatment', 'Topics', 'Multiple Diagnosis'], required: true },
    content: { type: String, required: true },
    link: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IResource>('Resource', ResourceSchema);
