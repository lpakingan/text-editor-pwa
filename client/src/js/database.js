import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");

  // create a connection to the database database and version
  const jateDb = await openDB("jate", 1);

  // create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction("jate", "readwrite");

  // open up the desired object store
  const store = tx.objectStore("jate");

  // store and pass in the content.
  const request = store.put({
    id: 1,
    text: content,
  });

  // confirmation that request went through
  const result = await request;
  console.log("Data saved to the database", result.value);
};

// TODO: Add logic for a method that gets all the content from the database
// gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // create a connection to the database and version
  const jateDb = await openDB("jate", 1);

  // create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction("jate", "readonly");

  // opens the desired object store
  const store = tx.objectStore("jate");

  // get all data in the database
  const request = store.getAll(1);

  // get confirmation of the request and then return the value
  const result = await request;
  console.log("result.value", result);
  return result.value;
};

initdb();
