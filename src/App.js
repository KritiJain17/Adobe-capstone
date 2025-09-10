import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { PageOutlet } from "./styles";
import { HomePage } from "./components/organisms/HomePage";
import { CheckoutPage } from "./components/organisms/CheckoutPage";
import { NAV_CONFIG } from "./constants";
import { ThankYouPage } from "./components/organisms/ThankYouPage";
import useTriggerView from "./useTriggerView";
import TargetViewTracker from "./TargetViewTracker";

function App() {

  return (
    <PageOutlet>
      <Router>
    <TargetViewTracker />
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={NAV_CONFIG?.NAV_SUBSCRIPTION} />}
          />

          <Route
            path={NAV_CONFIG?.NAV_SUBSCRIPTION}
            element={<HomePage />}
          ></Route>
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route
                    path={NAV_CONFIG?.NAV_CHECKOUT}
                    element={<CheckoutPage />}
                  ></Route>
                  <Route
                    path={NAV_CONFIG?.NAV_THANK_YOU}
                    element={<ThankYouPage />}
                  ></Route>
                </Routes>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </PageOutlet>
  );
}

export default App;
