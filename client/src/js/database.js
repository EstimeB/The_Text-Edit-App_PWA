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
   const jateDb = await openDB('jate');

   // Use .add to store and pass in the content
   const request = jateDb.add({ content });
 
   // Get confirmation of the request
   const result = await request;
   console.log('content saved', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  // Create connection to database
  const jateDb = await openDB('jate');

  // Use .getAll() method to get all the content
  const request = jateDb.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;
}

// Start the database.
initdb();
