import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { openReplayModel } from "src/context/Actions";

const QuackActionButtons = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <IconButton size="small" onClick={(e) => setLiked((current) => !current)}>
        {liked ? (
          <ThumbUpIcon sx={{ color: (theme) => theme.palette.primary.main }} />
        ) : (
          <ThumbUpOutlinedIcon />
        )}
      </IconButton>
      <IconButton size="small" onClick={() => openReplayModel()}>
        <CommentIcon />
      </IconButton>
    </>
  );
};

export default QuackActionButtons;
