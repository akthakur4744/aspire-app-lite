import React, { useCallback, useEffect, useState } from "react";
import HeaderLogo from "./assets/header.svg";
import PlusIcon from "./assets/box.svg";
import { Card, Stack, Typography } from "@mui/joy";
import Button from "@mui/material/Button";
import AddBankCard from "../AddCard";
import { BasicModalProps } from "../Modal";
import { BankCardType } from "../../services/CardService";

interface HeaderPropsType {
  children?: React.ReactNode;
  updateModalState: (arg0: BasicModalProps) => void;
  cardsList: BankCardType[];
  updateCardsList: (arg0: BankCardType[]) => void;
}
function Header(headerProps: HeaderPropsType) {
  const { updateModalState, cardsList, updateCardsList } = headerProps;
  const [isAddCardOpened, setIsCardOpened] = useState(false);

  const addCardsHandler = useCallback(() => {
    setIsCardOpened(!isAddCardOpened);
  }, [isAddCardOpened]);

  const resetModal = () => {
    updateModalState({} as BasicModalProps);
    addCardsHandler();
  };

  useEffect(() => {
    updateModalState({
      isOpen: isAddCardOpened,
      toggleModal: addCardsHandler,
      modalTitle: "Add Card",
      children: (
        <AddBankCard
          resetModal={resetModal}
          cardsList={cardsList}
          updateCardsList={updateCardsList}
        />
      ),
    });
    //eslint-disable-next-line
  }, [isAddCardOpened, addCardsHandler]);

  return (
    <Card
      sx={{
        background: "transparent",
        border: "none",
        gap: 0,
        width: "100%",
        position: { xs: "fixed", md: "relative" },
        padding: "20px",
        boxSizing: "border-box",
        top: 0,
        left: 0,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Typography
          level="body-sm"
          style={{ marginTop: "7px" }}
          sx={{
            color: { xs: "#fff", md: "#0C365A" },
            block: "inline-block",
          }}
        >
          Account Balance
        </Typography>
        <img
          className="header-logo"
          style={{ width: "min-content", marginLeft: "auto" }}
          src={HeaderLogo}
          alt="header"
        />
      </Stack>
      <Stack direction="row" alignItems={"center"} spacing={2}>
        <Typography
          level="body-xs"
          sx={{
            color: "#fff",
            block: "inline-block",
            width: "20px",
            height: "22px",
            background: "#01D167",
            borderRadius: "2px",
          }}
        >
          S$
        </Typography>
        <Typography
          level="title-lg"
          style={{ marginLeft: "5px" }}
          sx={{
            fontSize: "24px",
            color: { xs: "#fff", md: "#0C365A" },
          }}
        >
          3000
        </Typography>
        <Button
          style={{ marginLeft: "auto" }}
          sx={{ backgroundColor: { xs: "transparent", md: "#325BAF" } }}
        >
          <img
            style={{
              width: "min-content",
              verticalAlign: "middle",
              marginRight: "5px",
            }}
            src={PlusIcon}
            alt="plus_icon"
          />{" "}
          <Typography
            level="title-sm"
            sx={{
              color: { xs: "#23CEFD", md: "#fff" },
              block: "inline-block",
              textTransform: "none",
            }}
            onClick={addCardsHandler}
          >
            Add card
          </Typography>
        </Button>
      </Stack>
    </Card>
  );
}

export default Header;
