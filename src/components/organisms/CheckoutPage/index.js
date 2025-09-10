import React from "react";
import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  CheckoutBox,
  CheckoutBoxTile,
  TileTitle,
  TileValue,
} from "./styles";
import { Button } from "../../molecules/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_CONFIG } from "../../../constants";
import { useEffect } from "react";

export const CheckoutPage = () => {
useEffect(() => {
  const triggerCheckoutView = () => {
    if (window.adobe?.target?.triggerView) {
      window.adobe.target.triggerView("checkout");
    } else {
      setTimeout(triggerCheckoutView, 100); // retry after 100ms
    }
  };
  triggerCheckoutView();
}, []);

  const navigate = useNavigate();
  const location = useLocation();
  let card = location?.state;
  console.log(card);
  let costs = [
    {
      title: "MRP",
      value: card?.mrp,
    },
    {
      title: "GST",
      value: card?.gst,
    },
    {
      title: "TOTAL",
      value: card?.mrp + card?.gst,
    },
  ];

  const handleBuyButton = () => {
    navigate(NAV_CONFIG?.NAV_THANK_YOU, {
      state: card,
    });
  };
  return (
    <CheckoutPageContainer>
      <CheckoutBox>
        <CheckoutPageHeader>Billing Summary</CheckoutPageHeader>
        {costs?.map((cost) => {
          return (
            <CheckoutBoxTile key={`costType${cost?.title}`}>
              <TileTitle>{cost?.title}</TileTitle>
              <TileValue>{cost?.value}</TileValue>
            </CheckoutBoxTile>
          );
        })}
      </CheckoutBox>
      <Button
        margin="3rem 0 0 0"
        buttonTitle="Buy"
        padding="0.7rem 2rem"
        handleButtonClick={() => {
          handleBuyButton();
        }}
      />
    </CheckoutPageContainer>
  );
};
