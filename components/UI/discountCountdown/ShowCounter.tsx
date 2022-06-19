import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const ShowCounter: React.FC<Props> = ({ days, hours, minutes, seconds }) => {
  return (
    <div className=" flex rtl:flex-row-reverse items-center absolute top-[60%] sm:top-3/4">
      <DateTimeDisplay value={days} type={"days"} isDanger={days <= 3} />
      <p className="font-bold text-lg text-palette-secondary">:</p>
      <DateTimeDisplay value={hours} type={"hours"} isDanger={false} />
      <p className="font-bold text-lg text-palette-secondary">:</p>
      <DateTimeDisplay value={minutes} type={"mins"} isDanger={false} />
      <p className="font-bold text-lg text-palette-secondary">:</p>
      <DateTimeDisplay value={seconds} type={"seconds"} isDanger={false} />
    </div>
  );
};

export default ShowCounter;
