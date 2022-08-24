import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const InputActionButtons = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
      <div>
        <Tooltip title="Media">
          <IconButton size="small">
            <CropOriginalIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Emoji">
          <IconButton size="small">
            <SentimentSatisfiedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Button variant="contained" sx={{ borderRadius: 8 }}>
        Quack
      </Button>
    </Box>
  );
};

export default InputActionButtons;
