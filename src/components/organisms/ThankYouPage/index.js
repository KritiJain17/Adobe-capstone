import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ThankYouPage = () => {
  const location = useLocation();
let card = location?.state;
console.log(card);
  useEffect(() => {
    if (window.adobe && window.adobe.target) {
      window.adobe.target.getOffer({
        mbox: "kj-mbox",
        params: {
          subscriptionType: card?.cardHeader, // e.g. "standard" or "premium"
        },
        success: function (offers) {
          window.adobe.target.applyOffer({
            mbox: "kj-mbox",
            selector: "#kjtarget",
            offer: offers,
          });
        },
        error: function (status, error) {
          console.error("Custom mbox failed:", status, error);
        },
      });
    }
  }, [card?.cardHeader]);
  return (
<>
<h1>Thank You!</h1>
  <div id="kjtargetapstone"></div>
</>
  );
};
