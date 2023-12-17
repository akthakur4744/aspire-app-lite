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

  return (
    <div className="App">
      <Container
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Header
          updateModalState={updateModalState}
          cardsList={cardsList}
          updateCardsList={updateCardsList}
        />
        <Tab
          updateModalState={updateModalState}
          cardsList={cardsList}
          updateCardsList={updateCardsList}
          updateActiveCard={updateActiveCard}
        />
        <BasicModal {...modalConfig} />
      </Container>
      <div
        style={{
          marginTop: "57vh",
          zIndex: 1,
        }}
      >
        <CardOptions
          activeCard={activeCard}
          updateCardsList={updateCardsList}
          updateModalState={updateModalState}
        />
        <CardDetailsSection activeCard={activeCard}/>
      </div>
      <CustomBottomNavigation />
    </div>
  );
}

export default App;
