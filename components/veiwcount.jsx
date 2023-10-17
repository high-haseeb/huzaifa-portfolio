"use client";
import { useState, useEffect } from "react";
import firebaseApp from "../lib/firebase";
import { getFirestore, getDoc, setDoc, doc, updateDoc } from "firebase/firestore";

function HomePage() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const visitCountRef = doc(db, "stats", "visitCount");

    const increment = () => {
      setVisitCount((prevCount) => prevCount + 1);
      updateDoc(visitCountRef, {
        count: visitCount
      });
    };

    const getVisitCount = async () => {
      const docSnap = await getDoc(visitCountRef);
      if (docSnap.exists()) {
        setVisitCount(docSnap.data().count);
      } else {
        setVisitCount(1);
        setDoc(visitCountRef, { count: 1 });
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
