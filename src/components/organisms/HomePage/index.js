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
      gst: 360,
      duration: "9 months",
      type: COSNTANTS?.STANDARD,
    },
    {
      cardHeader: COSNTANTS?.PREMIUM,
      cardHeaderColor: "#FFC300",
      mrp: 4000,
      gst: 720,
      duration: "12 months",
      type: COSNTANTS?.PREMIUM,
    },
  ];
  return (
    <SubscriptionCardMenu>
      {cardDetails?.map((card) => {
        return (
          <SubscriptionCard
            key={`cardType${card?.cardHeader}`}
            card={card}
          ></SubscriptionCard>
        );
      })}
    </SubscriptionCardMenu>
  );
};
