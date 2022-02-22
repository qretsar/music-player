import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import TourDates from "../components/TourDates";
// import { MdLocationOn } from "react-icons/md";
import {
  FaLocationArrow,
  FaRegCalendarAlt,
  FaFlag,
  FaClock,
} from "react-icons/fa";

//Database
import db from "../firebase";
import { onSnapshot, collection, query, where } from "firebase/firestore";

export default function UpcomingEvents() {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "/managers/novakdpteam@gmail.com/Dado Polumenta"),
      where("date", ">=", new Date()),
      where("artist", "==", "Dado Polumenta"),
      where("manager", "==", "novakdpteam@gmail.com")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let allEventsFromFB = [];
      querySnapshot.forEach((doc) => {
        allEventsFromFB.push({
          ...doc.data(),
          date: format(doc.data().date.toDate(), "dd-MM"),
          subdate: doc.data().date.toDate(),
          id: doc.id,
        });
      });
      setDates(allEventsFromFB);
      return unsubscribe;
    });
  }, []);
  return (
    <div href="#services" className="event-container">
      <h1>Naredna gostovanja</h1>
      <div className="eventer">
        {/* <p className="event-detail flag">{getFlag(date)}</p> */}

        <p className="event-detail  flag">
          <FaFlag /> Država
        </p>

        <p className="event-detail club">
          <FaLocationArrow /> Lokacija
        </p>

        <p className="event-detail datum">
          <FaRegCalendarAlt /> Datum
        </p>
        <p className="event-detail distance">
          <FaClock /> Vreme
        </p>
      </div>

      {dates.map((date) => (
        <TourDates key={date.id} date={date} />
      ))}
    </div>
  );
}
