import React from "react";
import { useCountdown } from "../../../hooks/useCountdown";
import ExpiredNotice from "./ExpiredNotice";
import ShowCounter from "./ShowCounter";

interface Props {
  targetDate: number;
}
const DiscountFlipCountdown: React.FC<Props> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default DiscountFlipCountdown;
