import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTriggerView = () => {
  const location = window?.location?.pathname;
  console.log(location)

  useEffect(() => {
    const viewName = location.split("/").filter(Boolean).join("-") || "home";
    if (window.adobe?.target?.triggerView) {
      window.adobe.target.triggerView(viewName);
      console.log("Triggered view:", viewName);
    }
  }, [location]);
};

export default useTriggerView;
