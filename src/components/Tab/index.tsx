import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardsList from "../CardsList";
import { BasicModalProps } from "../Modal";
import { BankCardType } from "../../services/CardService";
import CardDetailsSection from "../CardDetails";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsPropsType {
  children?: React.ReactNode;
  updateModalState: (arg0: BasicModalProps) => void;
  cardsList: BankCardType[];
  updateCardsList: (arg0: BankCardType[]) => void;
  updateActiveCard: (arg0: BankCardType) => void;
  activeCard: BankCardType;
  updateActiveTab: (arg0: number) => void;
}
export default function BasicTabs(basicTabsProps: BasicTabsPropsType) {
  const {
    cardsList,
    updateCardsList,
    updateActiveCard,
    activeCard,
    updateModalState,
    updateActiveTab,
  } = basicTabsProps;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    updateActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="tab">
          <Tab
            sx={{
              textTransform: "none",
              color: { xs: "#FFFFFF", md: "#0C365A" },
            }}
            label="My debit cards"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textTransform: "none",
              color: { xs: "#FFFFFF", md: "#0C365A" },
            }}
            label="All company cards"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="main-pan">
          <CardsList
            cardsList={cardsList}
            updateCardsList={updateCardsList}
            updateActiveCard={updateActiveCard}
            activeCard={activeCard}
            updateModalState={updateModalState}
          />
          <div className="dt-card-details">
            <CardDetailsSection activeCard={activeCard} />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        All company cards
      </CustomTabPanel>
    </Box>
  );
}
