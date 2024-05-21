import { ref, get } from 'firebase/database';
import { database } from "../firebase";

export async function getAllArtWork() {
  try {
    const listingsRef = ref(database, 'artwork');
    const snapshot = await get(listingsRef);

    if (snapshot.exists()) {
      const allListingsDetails = snapshot.val();
      return Object.keys(allListingsDetails).map(key => ({
        id: key,
        ...allListingsDetails[key]
      }));
    } else {
      console.log('No listings found in the database');
      return [];
    }
  } catch (error) {
    console.error('Error retrieving all listings details:', error);
    throw error;
  }
}
export async function getAllCourses() {
  try {
    const listingsRef = ref(database, 'courses');
    const snapshot = await get(listingsRef);

    if (snapshot.exists()) {
      const allListingsDetails = snapshot.val();
      return Object.keys(allListingsDetails).map(key => ({
        id: key,
        ...allListingsDetails[key]
      }));
    } else {
      console.log('No listings found in the database');
      return [];
    }
  } catch (error) {
    console.error('Error retrieving all listings details:', error);
    throw error;
  }
}
