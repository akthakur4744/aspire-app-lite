import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import cardLogo from "./assets/business-and-finance.svg";
import nextLogo from "./assets/next.svg";

interface TransactionType {
  vendor: string;
  date: string;
  transactionAmount: string;
  transactionType: string;
  remarks: string;
  vendorIcon: string;
}

function Transaction(transactionProps: TransactionType) {
  const { vendor, date, transactionAmount, transactionType, remarks, vendorIcon } = transactionProps;
  let transactionValue = `+ S$ ${transactionAmount} `;
  let transactionColor = "#01D167";
  if(transactionType !== "credit"){
    transactionValue = `- S$ ${transactionAmount} `;
    transactionColor = "#222222";
  }
  return (
    <div>
      <ListItem alignItems="flex-start" sx={{paddingBottom:"0"}}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={vendorIcon} />
        </ListItemAvatar>
        <ListItemText
          primary={vendor}
          secondary={<React.Fragment>{date}</React.Fragment>}
        />
        <ListItemText
          primary={<React.Fragment>{transactionValue}<img style={{marginLeft:"5px"}} src={nextLogo} alt="next" /></React.Fragment>}
          sx={{ color: transactionColor }}
        />
      </ListItem>
      <ListItem alignItems="center" sx={{ marginLeft: "56px",marginTop: "0px",paddingTop: "0px"}}>
        <Avatar className="transaction_card" alt="card" src={cardLogo} />
        <ListItemText
          primary=""
          sx={{ color: "#325BAF" }}
          style={{ marginLeft: "10px" }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="caption"
                color="#325BAF"
              >
               {remarks}
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}

export default Transaction;
