import AvatarImage from "@/Features/AvatarImage";
import useApi from "@/hooks/useApi";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const QuackItem = () => {
  const { users, quacks } = useApi();
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0", flex: "0.2" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {formatDistanceToNow(quacks[0].createdAt, { addSuffix: true })}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <AvatarImage user={users[quacks[0].userId]} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {users[0].name}
        </Typography>
        <Typography>{quacks[0].message}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default QuackItem;
