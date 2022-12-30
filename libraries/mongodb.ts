import { MongoClient, Db, MongoClientOptions } from "mongodb";

let cachedDB: Db | null = null;
let cachedClient: MongoClient | null = null;

// Func. connect to Mongo
async function connectMongo(): Promise<Db> {
  let options = { useUnifiedTopology: true, useNewUrlParser: true };
  // Used cached connection if avaliable
  if (cachedDB) {
    console.log("using cached database");
    return cachedDB;
  }
  try {
    // If no cached connection, create one.
    const client = new MongoClient(
      process.env.MONGO_URI as string,
      options as MongoClientOptions
    );
    await client.connect();
    const db: Db = client.db("shorten");
    cachedDB = db;
    return cachedDB;
  } catch (error) {
    console.error("mongo err " + error);
    throw error;
  }
}

export const closeDb = async () => {
  if (!cachedDB) {
    return;
  }
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
  }
};

export default connectMongo;
