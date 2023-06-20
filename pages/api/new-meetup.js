// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        // const { title, image, address, description } = data

        // store data to database

        const client = await MongoClient.connect('mongodb+srv://asoko2:Aspire4752@cluster0.sjmpijx.mongodb.net/meetups?retryWrites=true&w=majority')

        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({message: 'Meetup inserted!'})
    }

}

export default handler;