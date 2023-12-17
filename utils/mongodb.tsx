import { MongoClient } from 'mongodb';

const uri = process.env.DATABASE_URL;

let cachedClient = null;
// cached client is used to avoid creating a new connection every time

export default async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  const db = client.db();

  cachedClient = { client, db };
  return cachedClient;
}