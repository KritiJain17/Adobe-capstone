import React from "react";
import Box from "../../atoms/box.atom";
import {
  SubscriptionCardContainer,
  SubscriptionCardHeader,
  SubscriptionCardBody,
} from "./styles";
import { COSNTANTS } from "../../../constants";
import { Button } from "../Button";

export const SubscriptionCard = ({
  card = {},
  cardHeader = COSNTANTS?.STANDARD,
  backgroundColorHeader = "#3B82F6",
}) => {
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
        ></Button>
      </SubscriptionCardBody>
    </SubscriptionCardContainer>
  );
};
