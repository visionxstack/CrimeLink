import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import IntelligenceDashboard from "./pages/IntelligenceDashboard";
import Cases from "./pages/Cases";
import CaseDetails from "./pages/CaseDetails";
import CreateCase from "./pages/CreateCase";
import Evidence from "./pages/Evidence";
import EntitiesList from "./pages/EntitiesList";
import CorrelationsView from "./pages/CorrelationsView";
import Networks from "./pages/Networks";
import RiskAnalysis from "./pages/RiskAnalysis";
import Timeline from "./pages/Timeline";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IntelligenceDashboard />} />
          <Route path="cases" element={<Cases />} />
          <Route path="cases/new" element={<CreateCase />} />
          <Route path="cases/:id" element={<CaseDetails />} />
          <Route path="evidence" element={<Evidence />} />
          <Route path="entities" element={<EntitiesList />} />
          <Route path="correlations" element={<CorrelationsView />} />
          <Route path="network" element={<Networks />} />
          <Route path="risk" element={<RiskAnalysis />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
