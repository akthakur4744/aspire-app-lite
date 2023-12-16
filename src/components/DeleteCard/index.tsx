import React from "react";
import { Button, Typography } from "@mui/joy";
import {
  BankCardType,
  deleteCard,
  getCardsList,
} from "../../services/CardService";

interface DeleteCardPropsType {
  children?: React.ReactNode;
  updateCardsList: (arg0: BankCardType[]) => void;
  cardToBeDeleted: BankCardType;
  resetModal: () => void;
}
const DeleteCard = (deleteCardProps: DeleteCardPropsType) => {
  const { updateCardsList, cardToBeDeleted, resetModal } = deleteCardProps;
  const onConfirmationClick = () => {
    deleteCard(cardToBeDeleted);
    updateCardsList(getCardsList());
    resetModal();
  };
  return (
    <div>
      <Typography level="title-sm" sx={{ color: "#0C365A" }}>
        Are you sure you want to delete this card?
      </Typography>
      <Button
        sx={{
          background: "#F2F2F2",
          color: "#0C365A",
          textTransform: "none",
          marginTop: "20px",
        }}
        onClick={onConfirmationClick}
      >
        Yes, delete
      </Button>
    </div>
  );
};

export default DeleteCard;
