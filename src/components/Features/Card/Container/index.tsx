import Card from "@mui/material/Card";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <Card
      sx={{
        width: "100%",
        marginBlock: 2,
        height: "fit-content",
        maxHeight: 1000,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Card>
  );
};

export default Container;
