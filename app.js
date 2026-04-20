const { MongoClient } = require("mongodb");

// Connection URL (Atlas use kar rahi ho toh apna URL paste karo)
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "libraryDB";

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db(dbName);
  const books = db.collection("books");

  // 1. Add new book
  await books.insertOne({
    title: "Atomic Habits",
    author: "James Clear",
    available: true,
    userId: null
  });

  console.log("Book added");

  // 2. Find books by author
  const result = await books.find({ author: "James Clear" }).toArray();
  console.log("Books by author:", result);

  // 3. Update book availability
  await books.updateOne(
    { title: "Atomic Habits" },
    { $set: { available: false } }
  );

  console.log("Book updated");

  // 4. Track borrowed book
  await books.updateOne(
    { title: "Atomic Habits" },
    { $set: { userId: "U101" } }
  );

  const borrowed = await books.find({ userId: "U101" }).toArray();
  console.log("Borrowed books:", borrowed);

  await client.close();
}

main().catch(console.error);