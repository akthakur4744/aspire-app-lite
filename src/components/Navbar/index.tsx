import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountIcon from "./assets/Account.svg";
import PaymentsIcon from "./assets/Payments.svg";
import CreditIcon from "./assets/Credit.svg";
import HomePageIcon from "./assets/Logo.svg";
import CardIcon from "./assets/pay.svg";
import { Card, Stack, Typography } from "@mui/joy";
import Aspire_logo from "../../assets/Aspire_Logo.svg";

const navStyles = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  width: { xs: "auto", md: "240px" },
  justifyContent: { xs: "center", md: "flex-start" },
  gap: { xs: "0px", md: "20px" },
  color: { xs: "#0C365A", md: "#fff" },
  flex: { xs: "1", md: "0" },
  padding: { md: "12px 48px" },
};

export default function CustomBottomNavigation() {
  const [value, setValue] = React.useState("cards");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        position: { xs: "fixed", sm: "fixed", md: "static", lg: "static" },
        bottom: 0,
        left: 0,
        width: { xs: "100vw", sm: "100vw", md: "340px" },
        zIndex: 2,
        display: { xs: "flex", md: "flex" },
        flexDirection: { xs: "row", md: "column" },
        height: { xs: "auto", md: "100vh" },
        backgroundColor: { xs: "#fff", md: "#0C365A" },
        justifyContent: { xs: "space-between", md: "flex-start" },
      }}
    >
      <div className="aspire_dweb_logo">
        <Stack
          direction="column"
          spacing={2}
          sx={{
            marginLeft: "48px",
            marginTop: "48px",
            width: "240px",
            marginRight: "56px",
            marginBottom: "48px",
          }}
        >
          <img width={"125px"} src={Aspire_logo} alt="aspire_logo" />
          <Typography
            sx={{
              color: "#FFFFFF",
              textAlign: "left",
              opacity: 0.3,
              fontSize: 14,
            }}
            level="body-sm"
          >
            {`Trusted way of banking for 3,000+ SMEs and startups in Singapore`}
          </Typography>
        </Stack>
      </div>
      <BottomNavigationAction
        label="Home"
        value="Home"
        showLabel={true}
        icon={<img src={HomePageIcon} alt="home" />}
        sx={navStyles}
      />
      <BottomNavigationAction
        label="Cards"
        value="cards"
        showLabel={true}
        icon={<img src={CardIcon} alt="cards" />}
        sx={navStyles}
      />
      <BottomNavigationAction
        label="Payments"
        value="payments"
        showLabel={true}
        icon={<img src={PaymentsIcon} alt="payments" />}
        sx={navStyles}
      />
      <BottomNavigationAction
        label="Credits"
        value="credits"
        showLabel={true}
        icon={<img src={CreditIcon} alt="credit" />}
        sx={navStyles}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        showLabel={true}
        icon={<img src={AccountIcon} alt="profile" />}
        sx={navStyles}
      />
    </BottomNavigation>
  );
}
