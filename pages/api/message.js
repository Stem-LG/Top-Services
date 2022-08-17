import client from "../../lib/mongodb";

//name email subject message

export default async (req, res) => {
  let db = client.db(process.env.MONGODB_DBNAME);
  let collection = db.collection("messages");

  let message = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    subject: req.body.subject,
    message: req.body.content,
  };

  let exist = await collection.findOne(message);

  if (exist) {
    res.json({ exist: true });
  } else {
    collection.insertOne(message);
    res.json({ exist: false });
  }
};
