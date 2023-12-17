import React, { useEffect, useState } from "react";
import { Card, Stack } from "@mui/joy";
import IconText from "../IconText";
import FrezeIcon from "../../assets/Freeze_card.svg";
import SetLimitIcon from "../../assets/Set_spend_limit.svg";
import GpayIcon from "../../assets/GPay.svg";
import ReplaceCardIcon from "../../assets/Replace_card.svg";
import DeactivateCardIcon from "../../assets/Deactivate_card.svg";
import {
  BankCardType,
  getCardsList,
  updateCard,
} from "../../services/CardService";
import { BasicModalProps } from "../Modal";
import DeleteCard from "../DeleteCard";

interface CardOptionsPropsType {
  children?: React.ReactNode;
  activeCard: BankCardType;
  updateCardsList: (arg0: BankCardType[]) => void;
  updateModalState: (arg0: BasicModalProps) => void;
}

function CardOptions(cardOptionsProps: CardOptionsPropsType) {
  const { activeCard, updateCardsList, updateModalState } = cardOptionsProps;
  const [isDelteCardModalOpen, setIsDeleteCardModalOpen] = useState(false);

  const toggleDeleteCardModal = () => {
    setIsDeleteCardModalOpen(!isDelteCardModalOpen);
  };

  const resetModal = () => {
    updateModalState({} as BasicModalProps);
    toggleDeleteCardModal();
  };

  useEffect(() => {
    updateModalState({
      isOpen: isDelteCardModalOpen,
      toggleModal: toggleDeleteCardModal,
      modalTitle: "Delete Card",
      children: (
        <DeleteCard
          resetModal={resetModal}
          cardToBeDeleted={activeCard}
          updateCardsList={updateCardsList}
        />
      ),
    });
    // eslint-disable-next-line
  }, [isDelteCardModalOpen]);

  let cardFreezeText = "Freeze Card";
  if (activeCard?.isFrozen) {
    cardFreezeText = "Unfreeze Card";
  }
  const onFreezeCardClick = () => {
    activeCard.isFrozen = !activeCard?.isFrozen;
    updateCard(activeCard);
    updateCardsList(getCardsList());
  };

  const onSetSpendLimitClick = () => {
    console.log("Set spend limit clicked");
  };

  const onAddToGpayClick = () => {
    console.log("Add to Gpay clicked");
  };

  const onReplaceCardClick = () => {
    console.log("Replace card clicked");
  };

  const onCancelCardClick = () => {
    toggleDeleteCardModal();
    // deleteCard(activeCard);
    // updateCardsList(getCardsList());
  };

  return (
    <Card
      sx={{
        background: "#EDF3FF",
        border: "none",
        gap: 0,
        marginTop: "40px",
        borderRadius: { xs: "10px 10px 0 0", md: "8px" },
        width: { xs: "auto", md: "366px" },
        // width: 366px;
        // margin-left: 60px;
        // border-radius: 8px;
      }}
    >
      <Stack direction="row" spacing={0}>
        <IconText
          iconText={cardFreezeText}
          icon={FrezeIcon}
          clickHandler={onFreezeCardClick}
        />
        <IconText
          iconText={"Set spend limit"}
          icon={SetLimitIcon}
          clickHandler={onSetSpendLimitClick}
        />
        <IconText
          iconText={"Add to Gpay"}
          icon={GpayIcon}
          clickHandler={onAddToGpayClick}
        />
        <IconText
          iconText={"Replace card"}
          icon={ReplaceCardIcon}
          clickHandler={onReplaceCardClick}
        />
        <IconText
          iconText={"Cancel card"}
          icon={DeactivateCardIcon}
          clickHandler={onCancelCardClick}
        />
      </Stack>
    </Card>
  );
}
export default CardOptions;
