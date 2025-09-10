import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TargetViewTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Map paths to readable view names
    let viewName = "default";
    if (path === "/") viewName = "home";
    else if (path === "/checkout") viewName = "checkout";
    else if (path === "/subscription") viewName = "subscription";
    else if (path === "/thankyou") viewName = "thankyou";

    // Trigger the view in Adobe Target
    if (window.adobe?.target?.triggerView) {
      window.adobe.target.triggerView(viewName);
      console.log("Triggered Target view:", viewName);
    }
  }, [location]);

  return null; // no UI
}

export default TargetViewTracker;
