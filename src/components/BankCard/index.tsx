import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import eyeIcon from "./assets/remove_red_eye-24px.svg";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";

export interface BankCardPropsType {
  logo?: string;
  name: string;
  number: string;
  validThru: string;
  cvv: string;
  networkTypeIcon: string;
  isFrozen?: boolean;
}

export default function BankCard(bankCardProps: BankCardPropsType) {
  const {
    logo = Logo,
    name,
    number,
    validThru,
    cvv,
    networkTypeIcon,
    isFrozen,
  } = bankCardProps;

  const [isMasked, setIsMasked] = useState(false);
  const [cvvSectionText, setCvvSectionText] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  let showCardText = "Show card number";
  if(!isMasked) {
    showCardText = "Hide card number";
  }

  React.useEffect(() => {
    let maskedCvvSectionText = `CVV : ${cvv}`;
    let maskedCardNumber = number;
    if (isMasked) {
      maskedCvvSectionText = cvvSectionText.replace(cvv, "***");
      // replace all but space and last 4 digits with x
      maskedCardNumber = number.replace(/.(?=.{4})/g, "x");
    }
    // adding space after every 4 digits
    maskedCardNumber = maskedCardNumber.replace(/(.{4})/g, "$1 ");
    setCvvSectionText(maskedCvvSectionText);
    setCardNumber(maskedCardNumber);
  }, [isMasked, cvv, cvvSectionText, number]);

  return (
    <div style={{ 
      width: "91vw", 
    position: "relative", paddingTop: "30px",
    display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!isFrozen && (
        <div
          onClick={() => setIsMasked(!isMasked)}
          style={{
            background: "#FFFFFF",
            maxWidth: "50%",
            marginLeft: "auto",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
            display: "flex",
            alignItems: "center",
            padding: "8px 8px 18px 8px",
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <img
            style={{
              width: "min-content",
              verticalAlign: "middle",
              marginRight: "5px",
            }}
            src={eyeIcon}
            alt="eye_icon"
          />
          <Typography
            style={{ color: "#01D167", display: "inline" }}
            level="body-xs"
          >{showCardText}</Typography>
        </div>
      )}
      <Card
        variant="outlined"
        style={{
          background: "#01D167",
          height: "160px",
          opacity: isFrozen ? "0.5" : "1",
          width: '100%',
          margin: 8
        }}
      >
        <CardContent>
          <img
            style={{ width: "min-content", marginLeft: "auto" }}
            src={logo}
            alt="home_logo"
          />
          <Typography
            textAlign={"left"}
            style={{ color: "white" }}
            level="title-lg"
          >
            {name}
          </Typography>
          <Typography
            textAlign={"left"}
            style={{ color: "white" }}
            level="body-sm"
          >
            {cardNumber}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <Typography
              textAlign={"left"}
              style={{ color: "white" }}
              level="body-xs"
            >{`Valid Thru : ${validThru}`}</Typography>
            <Typography
              textAlign={"right"}
              style={{ color: "white" }}
              level="body-xs"
            >
              {cvvSectionText}
            </Typography>
          </div>
          <img
            style={{ width: "min-content", marginLeft: "auto" }}
            src={networkTypeIcon}
            alt="network_type_icon"
          />
        </CardContent>
      </Card>
    </div>
  );
}
