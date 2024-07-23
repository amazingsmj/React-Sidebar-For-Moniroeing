import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Alerts from "./components/Alerts";
import Customers from "./components/Customers";
import Dashboard from "./components/Dashboard";
import Equipments from "./components/Equipments";
import HelpAndSupports from "./components/HelpAndSupports";
import Profile from "./components/settings/Profile";
import Layout from "./components/shared/Layout";
import Sites from "./components/Sites";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Dashboard />} />
              <Route path="sites" element={<Sites />} />
              <Route path="equipments" element={<Equipments />} />
              <Route path="customers" element={<Customers />} />
              <Route path="alerts" element={<Alerts />} />
              <Route path="settings" element={<Profile />} />
              <Route path="helpandsupports" element={<HelpAndSupports />} />
          </Route>
          <Route path="login" element={<di>This is login page</di>} />
          
      </Routes>
    </Router>
  );
}

export default App;
