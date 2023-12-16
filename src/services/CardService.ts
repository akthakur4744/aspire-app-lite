import Visa_logo from "../assets/Visa_Logo.svg";

export interface BankCardType {
  logo?: string;
  name: string;
  number: string;
  validThru: string;
  cvv: string;
  networkTypeIcon: string;
  isFrozen?: boolean;
}

const getDefaultCards = (): BankCardType[] => {
  return [
    {
      name: "Mark Henry",
      number: "5412345678901234",
      validThru: "12/20",
      cvv: "123",
      networkTypeIcon: Visa_logo,
    },
    {
      name: "Akshay Kumar",
      number: "5412345674561234",
      validThru: "12/20",
      cvv: "123",
      networkTypeIcon: Visa_logo,
      isFrozen: true,
    },
    {
      name: "Lorium Ipsum",
      number: "5412345670001234",
      validThru: "12/20",
      cvv: "123",
      // this is a american express logo in svg format
      networkTypeIcon: Visa_logo,
    },
  ];
};

export const getCardsList = (): BankCardType[] => {
  let cards = localStorage.getItem("cards");
  if (!cards) {
    localStorage.setItem("cards", JSON.stringify(getDefaultCards()));
    cards = localStorage.getItem("cards");
  }
  let cardList = JSON.parse(cards || "[]");
  return cardList;
};

export const addCard = (card: BankCardType) => {
  let cards = localStorage.getItem("cards");
  if (!cards) {
    localStorage.setItem("cards", JSON.stringify([card]));
  } else {
    let cardList = JSON.parse(cards);
    cardList.push(card);
    localStorage.setItem("cards", JSON.stringify(cardList));
  }
};

export const deleteCard = (card: BankCardType) => {
  let cards = localStorage.getItem("cards");
  if (cards) {
    let cardList = JSON.parse(cards);
    cardList = cardList.filter(
      (item: BankCardType) => item.number !== card.number
    );
    localStorage.setItem("cards", JSON.stringify(cardList));
  }
};

export const updateCard = (card: BankCardType) => {
  let cards = localStorage.getItem("cards");
  if (cards) {
    let cardList = JSON.parse(cards);
    cardList = cardList.map((item: BankCardType) => {
      if (item.number === card.number) {
        return card;
      } else {
        return item;
      }
    });
    localStorage.setItem("cards", JSON.stringify(cardList));
  }
};

export const generateCardNumber = () => {
  let cardNumber = "";
  for (let i = 0; i < 16; i++) {
    cardNumber += Math.floor(Math.random() * 10);
  }
  return cardNumber;
};

export const generateValidThru = () => {
  let month = Math.floor(Math.random() * 12) + 1;
  let year = Math.floor(Math.random() * 10) + 25;
  return `${month}/${year}`;
};

export const generateCVV = () => {
  let cvv = "";
  for (let i = 0; i < 3; i++) {
    cvv += Math.floor(Math.random() * 10);
  }
  return cvv;
};
