import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    // Use optional chaining to safely access db properties
    let modelExists = await models[modelName]?.db?.db?.listCollections({
      name: collectionName
    }).toArray();

    // If modelExists is not null or undefined, proceed to drop the collection
    if (modelExists?.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
