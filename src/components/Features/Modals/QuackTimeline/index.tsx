import Timeline from "@mui/lab/Timeline";
import InputItem from "./InputItem";
import QuackItem from "./QuackItem";

const QuackTimeline = () => {
  return (
    <Timeline>
      <QuackItem />
      <InputItem />
    </Timeline>
  );
};

export default QuackTimeline;
