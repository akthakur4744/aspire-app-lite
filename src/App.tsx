import React, { useState } from "react";
import "./App.css";
import { Container } from "@mui/joy";
import Header from "./components/Header";
import Tab from "./components/Tab";
import BasicModal, { BasicModalProps } from "./components/Modal";
import { BankCardType } from "./services/CardService";
import CardOptions from "./components/CardOptions";
import CardDetailsSection from "./components/CardDetails";
import CustomBottomNavigation from "./components/Navbar";

function App() {
  const [modalConfig, setModalConfig] = useState({} as BasicModalProps);
  const updateModalState = (modalConfig: BasicModalProps) => {
    setModalConfig(modalConfig);
  };

  const [cardsList, setCardsList] = useState([] as BankCardType[]);
  const updateCardsList = (cardsList: BankCardType[]) => {
    setCardsList(cardsList);
  };

  const [activeCard, setActiveCard] = useState({} as BankCardType);
  const updateActiveCard = (card: BankCardType) => {
    setActiveCard(card);
  };

  const [activeTab, setActiveTab] = useState(0);

  const updateActiveTab = (value: number) => {
    setActiveTab(value);
  };

  return (
    <div className="App">
      <CustomBottomNavigation />
      <div className="left-pan">
        <Header
          updateModalState={updateModalState}
          cardsList={cardsList}
          updateCardsList={updateCardsList}
        />
        <Container
          sx={{
            position: { xs: "fixed", md: "relative" },
            top: { xs: 80, md: 0 },
            left: 0,
            width: "100%",
          }}
        >
          <Tab
            updateModalState={updateModalState}
            cardsList={cardsList}
            updateCardsList={updateCardsList}
            updateActiveCard={updateActiveCard}
            activeCard={activeCard}
            updateActiveTab={updateActiveTab}
          />
          <BasicModal {...modalConfig} />
        </Container>
        {activeTab !== 1 && (
          <div
            style={{
              marginTop: "57vh",
              zIndex: 1,
              width: "100vw",
            }}
            className="mobile-card-details"
          >
            <CardOptions
              activeCard={activeCard}
              updateCardsList={updateCardsList}
              updateModalState={updateModalState}
            />
            <CardDetailsSection activeCard={activeCard} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
