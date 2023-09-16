// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/MongoConnect";
import Event from "@/models/EventModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET request are allowed." });
    return;
  }

  try {
    await connectMongoDB();
    const events = await Event.find();
    res.status(200).send(events);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong!." });
  }
}
