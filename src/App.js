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

function App() {
  return (
    <PageOutlet>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route
                    path={NAV_CONFIG?.NAV_CHECKOUT}
                    element={<CheckoutPage />}
                  ></Route>
                </Routes>
              </>
            }
          ></Route>
        </Routes>

        <HomePage />
        <CheckoutPage />
      </Router>
    </PageOutlet>
  );
}

export default App;
