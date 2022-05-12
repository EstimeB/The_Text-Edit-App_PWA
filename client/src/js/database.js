import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

   // Create connection to database
   const jateDb = await openDB('jate', 1);

   // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

   // Use .add to store and pass in the content
   const request = jateDb.put({id:1,value: content });
 
   // Get confirmation of the request
   const result = await request;
   console.log('content saved', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  // Create connection to database
  const jateDb = await openDB('jate', 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = contactDb.transaction('jate', 'readonly');

    // Open up the desired object store.
    const store = tx.objectStore('jate');

  // Use .getAll() method to get all the content
  const request = jateDb.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;
}

// Start the database.
initdb();
