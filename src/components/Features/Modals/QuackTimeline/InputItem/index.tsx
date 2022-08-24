import AvatarImage from "@/Features/AvatarImage";
import CommentInput from "@/Features/CommentInput";
import useApi from "@/hooks/useApi";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

const InputItem = () => {
  const { users } = useApi();
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0", flex: "0.2" }}
        variant="body2"
        color="text.secondary"
      ></TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <AvatarImage user={users[0]} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          py: "12px",
          px: 2,
          minHeight: "170px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <CommentInput placeholder="Quack your replay..." />
      </TimelineContent>
    </TimelineItem>
  );
};

export default InputItem;
