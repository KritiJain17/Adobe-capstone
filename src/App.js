import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { PageOutlet } from "./styles";
import { HomePage } from "./components/organisms/HomePage";

function App() {
  return (
    <PageOutlet>
      <HomePage />
    </PageOutlet>
  );
}

export default App;
