import { mongooseConnect } from "@/lib/mongoose";
import { Note } from "@/models/note";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const {method} = req;
    await mongooseConnect();
    

    if(method === 'GET') {
        const { id, author } = req.query;

        if(req.query?.id){
            const note = await Note.findById({_id: id})
            res.status(200).json(note)
        } 
        if (author) {
            const notes = await Note.find({ author: author as string });
            return res.status(200).json(notes);
        }

        return res.status(400).json({ error: "Author not provided" });
    }

    if (method === 'DELETE') {
        const {_id} = req.query;
        await Note.deleteOne({_id});
        res.status(200).json(true);
      }


    if(method === 'POST') {
        const {title, author, text} = req.body;
        const note = await Note.create({
            title,
            author,
            text
        });
        res.status(200).json(note);
    }

    if(method === 'PUT') {
        const {title, text, _id} = req.body;
        const updatedNote = await Note.findOneAndUpdate({_id}, {title, text})
        res.status(200).json(updatedNote);
    }
  
}