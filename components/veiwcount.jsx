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
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    const db = getFirestore(firebaseApp);
    const visitCountRef = doc(db, "stats", "visitCount");

    const increment = () => {
      setVisitCount((prevCount) => prevCount + 1);
      console.log("incremented succesfully");
      console.log(visitCount);
      updateDoc(visitCountRef, {count: visitCount}).catch(e => console.log(e));
    };

    const getVisitCount = async () => {
      const docSnap = await getDoc(visitCountRef);
      if (docSnap.exists()) {
        setVisitCount(docSnap.data().count);
        console.log('aah the count actually updated :)');
        console.log(docSnap.data().count);
      } else {
        setVisitCount(1);
        setDoc(visitCountRef, { count: visitCount });
        console.log('this area was called');
      }
    };

    getVisitCount();
    increment();
  }, []);

  return (
    <div>
      <h1>Visit Count: {visitCount}</h1>
      {/* Your other components/content */}
    </div>
  );
}

export default HomePage;
