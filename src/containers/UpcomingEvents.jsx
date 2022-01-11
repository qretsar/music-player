import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import TourDates from "../components/TourDates";
//Database
import db from "../firebase";
import {
  onSnapshot,
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function UpcomingEvents() {
  const [dates, setDates] = useState([]);
  useEffect(async () => {
    const q = query(collection(db, "events"), where("date", ">=", new Date()));
    const querySnapshot = await getDocs(q);
    let allEventsFromFB = [];
    querySnapshot.forEach((doc) =>
      allEventsFromFB.push({
        ...doc.data(),
        date: format(doc.data().date.toDate(), "dd-MM-yyyy"),
        id: doc.id,
      })
    );
    setDates(allEventsFromFB);
  }, []);
  return (
    <div className="event-container">
      <h1>Naredna gostovanja</h1>
      {dates.map((date) => (
        <TourDates key={date.id} date={date} />
      ))}
    </div>
  );
}
