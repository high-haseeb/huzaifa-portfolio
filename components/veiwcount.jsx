"use client";
import { useState, useEffect } from "react";
import firebaseApp from "../lib/firebase";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function HomePage() {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    const db = getFirestore(firebaseApp);
    const visitCountRef = doc(db, "stats", "visitCount");

    const updateVeiw = async () => {
      const docSnap = await getDoc(visitCountRef);

      if (docSnap.exists()) {
        setVisitCount(await docSnap.data().count || 0);
        console.log(visitCount);
        await updateDoc(visitCountRef, { count: visitCount + 1 });
        console.log("succesfully updated");
        console.log(visitCount);
      } else {
        console.log("field does not exist");
      }
    };

    updateVeiw();
  }, []);

  return (
    <div>
      <h1>Visit Count: {visitCount}</h1>
      {/* Your other components/content */}
    </div>
  );
}

export default HomePage;
