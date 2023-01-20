import mongoose from "mongoose";
const db_URI = "mongodb://localhost/AuthClass";

const dbConnection = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(db_URI);
    console.log(`database connection to ${conn.connection.host} established`);
  } catch (error) {
    console.log(`${error}`);
  }
};

export default dbConnection;
