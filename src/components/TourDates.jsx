import React from "react";
import Flags from "country-flag-icons/react/3x2";
import { formatDistance, intervalToDuration } from "date-fns";
import { srLatn } from "date-fns/locale";

function TourDates({ date }) {
  // const getFlag = (date) => {
  //   switch (date.country) {
  //     case "BA":
  //       return <Flags.BA title="Bosna" className="flagic" />;
  //     case "RS":
  //       return <Flags.RS title="Srbija" className="flagic" />;
  //     case "MK":
  //       return <Flags.MK title="Makedonija" className="flagic" />;
  //     case "ME":
  //       return <Flags.ME title="Crna Gora" className="flagic" />;
  //     case "HR":
  //       return <Flags.HR title="Hrvatska" className="flagic" />;
  //     case "SI":
  //       return <Flags.SI title="Slovenija" className="flagic" />;
  //     case "AT":
  //       return <Flags.AT title="Austria" className="flagic" />;
  //     case "SE":
  //       return <Flags.SE title="Svedska" className="flagic" />;
  //     case "DE":
  //       return <Flags.DE title="Nemacka" className="flagic" />;
  //   }
  // };
  const Flag = Flags[`${date.country}`];
  let duration = intervalToDuration({
    start: date.subdate,
    end: new Date(),
  });
  return (
    <div className="event names">
      {/* <p className="event-detail flag">{getFlag(date)}</p> */}
      <p className="event-detail  flag">
        <Flag className="flagic" />
      </p>
      <div className="event-detail club">
        <p>{date.club}</p>
        <p>{date.location} </p>
      </div>

      <p className="event-detail datum">{date.date.toLocaleString()}</p>
      <p className="event-detail distance">
        {formatDistance(new Date(), date.subdate, {
          locale: srLatn,
        })}
      </p>
    </div>
  );
}

export default TourDates;
