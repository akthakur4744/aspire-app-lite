import React, { useEffect } from "react";
import BankCard from "../BankCard";
import { getCardsList, BankCardType } from "../../services/CardService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardOptions from "../CardOptions";
import { BasicModalProps } from "../Modal";

interface CardsListPropsType {
  children?: React.ReactNode;
  cardsList: BankCardType[];
  updateCardsList: (arg0: BankCardType[]) => void;
  updateActiveCard: (arg0: BankCardType) => void;
  activeCard: BankCardType;
  updateModalState: (arg0: BasicModalProps) => void;
}
function CardsList(cardsListProps: CardsListPropsType) {
  const {
    cardsList,
    updateCardsList,
    updateActiveCard,
    activeCard,
    updateModalState,
  } = cardsListProps;
  useEffect(() => {
    const cardsList = getCardsList();
    updateCardsList(cardsList);
    updateActiveCard(cardsList[0]);
    // eslint-disable-next-line
  }, [cardsList.length]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const afterChangeHandler = (current: number) => {
    updateActiveCard(cardsList[current]);
  };

  return (
    <div className="slider-container">
      <Slider {...settings} afterChange={afterChangeHandler}>
        {cardsList.map((item) => (
          <BankCard {...item} key={item.number} />
        ))}
      </Slider>
      <div className="dt-card-options">
        <CardOptions
          activeCard={activeCard}
          updateCardsList={updateCardsList}
          updateModalState={updateModalState}
        />
      </div>
    </div>
  );
}

export default CardsList;
