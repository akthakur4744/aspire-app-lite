import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { generateCVV, generateCardNumber, generateValidThru, addCard, BankCardType, getCardsList } from "../../services/CardService";
import Visa_logo from "../../assets/Visa_Logo.svg";

interface AddBankCardPropsType {
  children?: React.ReactNode;
  resetModal: () => void;
  cardsList: BankCardType[];
  updateCardsList: (arg0: BankCardType[]) => void;
}
export default function AddBankCard(addBankCardProps: AddBankCardPropsType) {
  const { resetModal, updateCardsList } = addBankCardProps;
  const [cardHolderName, setCardHolderName] = useState("");
  const [error, serError] = useState("");
  const addCardHandler = () => {
    if(!cardHolderName){
      serError("This field is required");
      return;
    }
    serError("");
    const cardNumber = generateCardNumber();
    const validThruDate = generateValidThru();
    const cvv = generateCVV();

    addCard({
      name: cardHolderName,
      number: cardNumber,
      validThru: validThruDate,
      cvv: cvv,
      networkTypeIcon: Visa_logo
    })
    resetModal();
    updateCardsList(getCardsList());
  };

  const onCardHolderNameChange = (event: any) => {
    setCardHolderName(event.target.value);
    serError("");
  }
  
  return (
    <div>
      <Typography
        textAlign={"left"}
        style={{ color: "#0C365A" }}
        level="body-sm"
      >
        {`Please enter you name and click on add, it will automatically generate all other fields.`}
      </Typography>
      <Stack direction="column" alignItems={"center"} spacing={2}>
        <TextField error={error.length>0} helperText={error} onChange={onCardHolderNameChange} value={cardHolderName} id="standard-basic" label="Your Name" variant="standard" />
        <Button>
          <Typography
            sx={{textTransform: "none"}}
            level="title-md"
            textColor={"#0C365A"}
            onClick={addCardHandler}
          >
            Add card
          </Typography>
        </Button>
      </Stack>
    </div>
  );
}
