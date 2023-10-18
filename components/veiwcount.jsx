"use client";
import { useState, useEffect } from "react";
import firebaseApp from "../lib/firebase";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";

function HomePage() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {

    console.log("useEffect");
    const db = getFirestore(firebaseApp);
    const visitCountRef = doc(db, "stats", "visitCount");

    const updateVeiw = async () => {
      // get the document refrence
      const docSnap = await getDoc(visitCountRef); // get the current view count

      if (docSnap.exists()) {
        // setVisitCount(docSnap.data().count); // get the current value
        const currentVeiws = docSnap.data().count 
        setVisitCount(currentVeiws + 1);
        await updateDoc(visitCountRef, { count: currentVeiws + 1 }); // update the current value
        console.log("succesfully updated");
      } else {
        console.log("field does not exist");
      }
    };

    updateVeiw();
  }, []);

  return (
    <div>
      <h1>Visit Count: {visitCount}</h1>
    </div>
  );
}

export default HomePage;
