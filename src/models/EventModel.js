import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  title: String,
  event: String,
  date: String,
  image: {
    type: String,
    default:
      "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
  },
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
