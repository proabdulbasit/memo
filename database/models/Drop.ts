import mongoose from 'mongoose';
import { IDrop } from '../interface';

const { Schema } = mongoose;


const dropSchema = new Schema<IDrop>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    website: String,
    image: String,
    badge: { type: Number, required: true },
    metadata: { type: String, required: true }
});

export default dropSchema;