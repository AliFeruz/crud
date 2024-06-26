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
        if(req.query?.id){
            const oneNews = await Note.findById({_id: req.query.id})
            res.status(200).json(oneNews)
        } else {
            const news = await Note.find({});
            res.status(200).json(news)
        }
    }

    if (method === 'DELETE') {
        const {_id} = req.query;
        await Note.deleteOne({_id});
        res.status(200).json(true);
      }


    if(method === 'POST') {
        const {title, author, text} = req.body;
        const catsDoc = await Note.create({
            title,
            author,
            text
        });
        res.status(200).json(catsDoc);
    }

    if(method === 'PUT') {
        const {title, text, _id} = req.body;
        const updatedOneNews = await Note.findOneAndUpdate({_id}, {title, text})
        res.status(200).json(updatedOneNews);
    }
  
}