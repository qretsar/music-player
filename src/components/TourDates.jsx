import React from "react";
import Flags from "country-flag-icons/react/3x2";

function TourDates({ date }) {
  const getFlag = (date) => {
    switch (date.country) {
      case "BIH":
        return <Flags.BA title="Bosna" width="2rem" />;
      case "SRB":
        return <Flags.RS title="Srbija" width="2rem" />;
      case "AT":
        return <Flags.AT title="Austria" width="2rem" />;
      case "MK":
        return <Flags.MK title="Makedonija" width="2rem" />;
      case "CG":
        return <Flags.ME title="Crna Gora" width="2rem" />;
      case "CRO":
        return <Flags.HR title="Hrvatska" width="2rem" />;
      case "SLO":
        return <Flags.SI title="Slovenija" width="2rem" />;
    }
  };
  return (
    <div className="event">
      <p className="event-detail flag">{getFlag(date)}</p>
      <p className="event-detail">{date.club}</p>
      <p className="event-detail">{date.location} </p>
      <p className="event-detail">{date.date}</p>
    </div>
  );
}

export default TourDates;
