// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/MongoConnect";
import Event from "@/models/EventModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST request are allowed." });
    return;
  }

  const { title, event, date } = req.body;

  try {
    await connectMongoDB();
    Event.create({ title, event, date }).then((data) => {
      res.status(201).send(data);
    });
  } catch (err) {
    res.status(400).send({ err, msg: "Something went wrong!." });
  }
}
