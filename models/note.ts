import mongoose, { Schema, models } from "mongoose";

const noteSchema = new Schema(
    {
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true,
            min: 2,
            max: 2200
        },
    },
    { timestamps: true}
);

export const Note = models.Note || mongoose.model("Note", noteSchema);



