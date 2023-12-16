import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountIcon from "./assets/Account.svg";
import PaymentsIcon from "./assets/Payments.svg";
import CreditIcon from "./assets/Credit.svg";
import HomePageIcon from "./assets/Logo.svg";
import CardIcon from "./assets/pay.svg";

export default function CustomBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 2,
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        showLabel={true}
        icon={<img src={HomePageIcon} alt="home" />}
      />
      <BottomNavigationAction
        label="Cards"
        value="cards"
        showLabel={true}
        icon={<img src={CardIcon} alt="cards" />}
      />
      <BottomNavigationAction
        label="Payments"
        value="payments"
        showLabel={true}
        icon={<img src={PaymentsIcon} alt="payments" />}
      />
      <BottomNavigationAction
        label="Credits"
        value="credits"
        showLabel={true}
        icon={<img src={CreditIcon} alt="credit" />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        showLabel={true}
        icon={<img src={AccountIcon} alt="profile" />}
      />
    </BottomNavigation>
  );
}
