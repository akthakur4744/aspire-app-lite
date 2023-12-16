import React from "react";
import { Typography } from "@mui/joy";
import Button from "@mui/material/Button";

interface IconTextPropsType {
  children?: React.ReactNode;
  clickHandler: () => void;
  iconText: string;
  icon: string;
}
function IconText(iconTextProps: IconTextPropsType) {
  const { clickHandler, iconText, icon } = iconTextProps;
  return (
    <div>
      <Button
        style={{ marginLeft: "auto", display: "flex", flexDirection: "column" }}
      >
        <img
          style={{
            width: "min-content",
            verticalAlign: "middle",
            marginRight: "5px",
          }}
          src={icon}
          alt=""
        />{" "}
        <Typography
          level="title-sm"
          sx={{
            color: "#0C365A",
            textTransform: "none",
          }}
          onClick={clickHandler}
        >
          {iconText}
        </Typography>
      </Button>
    </div>
  );
}

export default IconText;
