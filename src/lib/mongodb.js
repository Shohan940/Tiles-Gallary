
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URI;

if (!uri) {
  throw new Error("MONGO_DB_URI is missing from .env.local");
}

const client = new MongoClient(uri);

const db = client.db("tiles_gallery");

export { client, db };
