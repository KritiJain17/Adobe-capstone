import React from "react";
import { SubscriptionCard } from "../../molecules/SubscriptionCard";
import { COSNTANTS } from "../../../constants";
import { SubscriptionCardMenu } from "./styles";
export const HomePage = () => {
  let cardDetails = [
    {
      cardHeader: COSNTANTS?.STANDARD,
      cardHeaderColor: "#3B82F6",
      mrp: 2000,
      gst: 250,
      duration: "9 months",
    },
    {
      cardHeader: COSNTANTS?.PREMIUM,
      cardHeaderColor: "#FFC300",
      mrp: 4000,
      gst: 500,
      duration: "12 months",
    },
  ];
  return (
    <SubscriptionCardMenu>
      {cardDetails?.map((card) => {
        return <SubscriptionCard card={card}></SubscriptionCard>;
      })}
    </SubscriptionCardMenu>
  );
};
