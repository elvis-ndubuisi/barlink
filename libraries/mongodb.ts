import { MongoClient, Db, MongoClientOptions } from "mongodb";

let cachedDB: Db | null = null;

// Func. connect to Mongo
async function connectMongo(): Promise<Db> {
  let options = { useUnifiedTopology: true, useNewUrlParser: true };
  // Used cached connection if avaliable
  if (cachedDB) {
    console.log("using cached database");
    return cachedDB;
  }
  // If no cacnhed connection, create one.
  const client = new MongoClient(
    process.env.MONGO_URI as string,
    options as MongoClientOptions
  );
  await client.connect();
  const db: Db = client.db("shortens");
  cachedDB = db;
  return cachedDB;
}

export default connectMongo;

// if (!process.env.MONGO_URI) {
//   throw new Error("Missing database connection string");
// }

// const uri: string = process.env.MONGO_URI;
// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).

//   let globalWithMongoClientPromise = global as typeof globalThis & {
//     _mongoClientPromise: Promise<MongoClient>;
//   };

//   if (!globalWithMongoClientPromise._mongoClientPromise) {
//     client = new MongoClient(uri);
//     globalWithMongoClientPromise._mongoClientPromise = client.connect();
//   }

//   clientPromise = globalWithMongoClientPromise._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;
