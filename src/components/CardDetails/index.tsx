import * as React from "react";
import { Container } from "@mui/joy";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import RecentTransactions from "../RecentTransanctions";
import TransactionLogo from "../RecentTransanctions/Transaction/assets/transactions.svg";
import CardSectionLogo from "./assets/card_detail.svg";
import DownArrow from "../RecentTransanctions/Transaction/assets/down-arrow.svg";
import CardDetailComponent from "./CardDetailComponent";
import { BankCardPropsType } from "../BankCard";

interface CardDetailsSectionProps {
  activeCard: BankCardPropsType;
  children?: React.ReactNode;
}
export default function CardDetailsSection(
  CardDetailsSectionProps: CardDetailsSectionProps
) {
  const { activeCard } = CardDetailsSectionProps;
  return (
    <Container sx={{ background: "#FFFFFF", padding: "24px" }}>
      <AccordionGroup sx={{ maxWidth: 400, marginBottom: 8, gap: "24px" }}>
        <Accordion
          sx={{ border: "1px solid #F0F0F0", borderRadius: "10px" }}
          defaultExpanded={true}
        >
          <AccordionSummary
            indicator={<img src={DownArrow} alt="down_arrow" />}
            sx={{
              background: "#FAFCFF",
              height: "72px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <img src={CardSectionLogo} alt="trans_logo" /> Card Details
          </AccordionSummary>
          <AccordionDetails sx={{ border: "#F5F5F5" }}>
            {activeCard &&
              Object.entries(activeCard).map(([key, value]) => {
                if (key === "isFrozen") return null;
                return (
                  <CardDetailComponent
                    key={key}
                    attributeName={key}
                    attributeValue={value}
                  />
                );
              })}
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ border: "1px solid #F5F5F5", borderRadius: "10px" }}
          defaultExpanded={true}
        >
          <AccordionSummary
            indicator={<img src={DownArrow} alt="down_arrow" />}
            sx={{
              background: "#FAFCFF",
              height: "72px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <img src={TransactionLogo} alt="trans_logo" /> Recent Transactions
          </AccordionSummary>
          <AccordionDetails sx={{ border: "#F5F5F5" }}>
            <RecentTransactions />
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Container>
  );
}
