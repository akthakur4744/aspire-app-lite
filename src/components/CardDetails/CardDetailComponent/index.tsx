import {
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import React from "react";

interface CardDetailComponentProps {
  attributeName: string;
  attributeValue: string;
  children?: React.ReactNode;
}
export default function CardDetailComponent(
  cardDetailComponentProps: CardDetailComponentProps
) {
  const { attributeValue, attributeName } = cardDetailComponentProps;
  return (
    <div>
      <ListItem sx={{ display: "flex", flexDirection: "column" }}>
        <ListItemContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
           {attributeName !== "networkTypeIcon" && (
            <React.Fragment>
              <Typography level="title-sm">{attributeName}</Typography>
              <Typography level="body-sm" noWrap>
                {attributeValue}
              </Typography>
            </React.Fragment>
           )}
           
          {attributeName === "networkTypeIcon" && (
            <React.Fragment>
            <Typography level="title-sm">{"Type"}</Typography>
            <div style={{background: "#EDF3FF"}}>
              <img src={attributeValue} alt="networkTypeIcon" />
            </div>
           </React.Fragment>
          )}
        </ListItemContent>
      </ListItem>
    </div>
  );
}
