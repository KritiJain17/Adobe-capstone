import React from "react";
import Box from "../../atoms/box.atom";
import {
  SubscriptionCardContainer,
  SubscriptionCardHeader,
  SubscriptionCardBody,
} from "./styles";
import { COSNTANTS, NAV_CONFIG } from "../../../constants";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const SubscriptionCard = ({
  card = {},
  cardHeader = COSNTANTS?.STANDARD,
  backgroundColorHeader = "#3B82F6",
}) => {
  const navigate = useNavigate();
  const handleCheckoutButton = () => {
    navigate(NAV_CONFIG?.NAV_CHECKOUT, {
      state: card,
    });
  };
  return (
    <SubscriptionCardContainer>
      <SubscriptionCardHeader backgroundColor={card?.cardHeaderColor}>
        {card?.cardHeader}
      </SubscriptionCardHeader>
      <SubscriptionCardBody>
        {`Get yours for Rs. ${card?.mrp}`}
        <Button
          buttonTitle="Checkout"
          margin="3rem 0 0 0 "
          padding="1rem 1.5rem"
          handleButtonClick={() => {
            handleCheckoutButton();
          }}
        ></Button>
      </SubscriptionCardBody>
    </SubscriptionCardContainer>
  );
};
